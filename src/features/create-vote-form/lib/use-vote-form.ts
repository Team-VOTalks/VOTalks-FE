'use client';

import { useCallback } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { type CreateVoteFormRequestValues, type CreateVoteFormValues } from '../types';
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

  const handleFormSubmit = handleSubmit((body, e) => {
    e?.preventDefault;
    const { title, description, category, options } = body;
    const data: CreateVoteFormRequestValues = {
      title: title.trim(),
      description: description.trim() || null,
      category,
      voteOptions: options.map(e => e.value),
    };
    console.log(JSON.stringify(data));
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
