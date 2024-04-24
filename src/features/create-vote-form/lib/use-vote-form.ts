'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useRef } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { useQueryClient } from '@tanstack/react-query';
import type { CreateVoteFormRequestValues, CreateVoteFormValues } from '../types';
import postVotes from '../api/post-votes';
import * as Shared from '@/shared';

export default function useVoteForm() {
  Shared.lib.usePreventDeviation();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm<CreateVoteFormValues>({
    defaultValues: {
      category: '',
      title: '',
      description: '',
      options: [{ value: '' }, { value: '' }],
    },
  });
  const { fields: optionInputFields, append, remove } = useFieldArray({ control, name: 'options' });

  const addOptionInput = useCallback(() => {
    append({ value: '' });
  }, []);
  const removeOptionInput = useCallback((inputIdx: number) => {
    remove(inputIdx);
  }, []);

  const queryClient = useQueryClient();
  const router = useRouter();
  const submitBtnRef = useRef<HTMLButtonElement | null>(null);

  const handleFormSubmit = handleSubmit((body, e) => {
    e?.preventDefault;
    submitBtnRef.current!.disabled = true;
    submitBtnRef.current!.textContent = '투표 생성 중...';

    const { title, description, category, options } = body;
    const data: CreateVoteFormRequestValues = {
      title: title.trim(),
      description: description.trim() || null,
      category,
      voteOptions: options.map(e => e.value),
    };
    postVotes(data)
      .then(async () => {
        if (submitBtnRef.current) submitBtnRef.current.textContent = '데이터 불러오는 중...';
        await Promise.all([
          queryClient.refetchQueries({ queryKey: ['votes', category] }),
          queryClient.refetchQueries({ queryKey: ['votes', 'all'] }),
        ]);
        router.push('/');
      })
      .catch(err => {
        if (submitBtnRef.current) {
          submitBtnRef.current.disabled = false;
          submitBtnRef.current.textContent = '투표 만들기';
        }
        const { response } = err;
        const message = response?.data?.message ?? response?.statusText ?? '뭔가 잘못됐어요...';
        const status = response?.status ?? '???';
        console.warn(`[${status}] ${message}`);
      });
  });

  return {
    optionInputFields,
    addOptionInput,
    removeOptionInput,
    register,
    watch,
    handleFormSubmit,
    errors,
    submitBtnRef,
  };
}
