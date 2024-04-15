'use client';

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import type { CreateVoteFormRequestValues, CreateVoteFormValues } from '../types';
import postVotes from '../api/post-votes';
import * as Shared from '@/shared';

export default function useVoteForm() {
  Shared.lib.usePreventDeviation();

  const router = useRouter();

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

  const handleFormSubmit = handleSubmit((body, e) => {
    e?.preventDefault;
    const { title, description, category, options } = body;
    const data: CreateVoteFormRequestValues = {
      title: title.trim(),
      description: description.trim() || null,
      category,
      voteOptions: options.map(e => e.value),
    };
    postVotes(data)
      .then(() => router.push('/'))
      .catch(err => {
        const { response } = err;
        const message = response?.data?.message ?? response?.statusText ?? '뭔가 잘못됐어요...';
        const status = response?.status ?? '000';
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
  };
}
