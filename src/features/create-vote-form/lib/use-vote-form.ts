'use client';

import { useCallback, useEffect, useState } from 'react';
import { MAX_SELECT_COUNT, MIN_SELECT_COUNT } from '../constants';

export default function useVoteForm() {
  const [currentCategory, setCurrentCategory] = useState('');

  const [optionInputValues, setOptionInputValues] = useState<string[]>([]);
  const [selectCount, setSelectCount] = useState(MIN_SELECT_COUNT);
  const [allowMultipleSelection, setAllowMultipleSelection] = useState(false);

  useEffect(() => {
    if (allowMultipleSelection) setSelectCount(MIN_SELECT_COUNT);
  }, [allowMultipleSelection]);

  // 복수 선택 카운터 로직
  const upperSelectCount =
    selectCount >= MAX_SELECT_COUNT || selectCount >= optionInputValues.length + 1;
  const lowerSelectCount = selectCount <= MIN_SELECT_COUNT;

  const increaseSelectCount = useCallback(() => {
    setSelectCount(prev => (!upperSelectCount ? prev + 1 : prev));
  }, [upperSelectCount]);
  const decreaseSelectCount = useCallback(() => {
    setSelectCount(prev => (!lowerSelectCount ? prev - 1 : prev));
  }, [lowerSelectCount]);

  const toggleAllowMultipleSelection = useCallback(() => {
    setAllowMultipleSelection(prev =>
      optionInputValues.length + 1 >= MIN_SELECT_COUNT ? !prev : prev,
    );
  }, [optionInputValues.length]);

  // 선택지 인풋 관리 로직
  const addOptionInput = useCallback(() => {
    setOptionInputValues(prev => [...prev, '']);
  }, []);
  const removeOptionInput = useCallback(
    (inputIdx: number) => {
      if (selectCount > MAX_SELECT_COUNT || selectCount >= optionInputValues.length + 1) {
        decreaseSelectCount();
      }
      if (optionInputValues.length + 1 === MIN_SELECT_COUNT) {
        setAllowMultipleSelection(false);
      }
      setOptionInputValues(prev => prev.filter((_, i) => i !== inputIdx));
    },
    [selectCount, optionInputValues.length],
  );
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
    selectCount,
    upperSelectCount,
    lowerSelectCount,
    increaseSelectCount,
    decreaseSelectCount,
    allowMultipleSelection,
    toggleAllowMultipleSelection,
  };
}
