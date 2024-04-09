'use client';

import { useCallback } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { type CreateVoteFormValues } from '../types';

export default function useVoteForm() {
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
    console.log(body);
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
