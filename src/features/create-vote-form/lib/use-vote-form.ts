'use client';

import { useCallback, useState } from 'react';

export default function useVoteForm() {
  const [currentCategory, setCurrentCategory] = useState('');
  const [optionInputValues, setOptionInputValues] = useState<string[]>([]);

  const addOptionInput = useCallback(() => {
    setOptionInputValues(prev => [...prev, '']);
  }, []);
  const removeOptionInput = useCallback((inputIdx: number) => {
    setOptionInputValues(prev => prev.filter((_, i) => i !== inputIdx));
  }, []);
  const changeOptionInputValue = useCallback((inputValue: string, inputIdx: number) => {
    setOptionInputValues(prev => ((prev[inputIdx] = inputValue), [...prev]));
  }, []);

  return {
    currentCategory,
    setCurrentCategory,
    optionInputValues,
    addOptionInput,
    removeOptionInput,
    changeOptionInputValue,
  };
}
