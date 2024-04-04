'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import * as Shared from '@/shared';

export default function useThemeBtnDropdown() {
  const themeBtnAreaRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const isClickedOutside = Shared.lib.useClickedOutsideOfElement(themeBtnAreaRef);

  const handleToggleMenu = useCallback(() => setIsOpen(prev => !prev), []);

  useEffect(() => {
    if (isClickedOutside) setIsOpen(false);
  }, [isClickedOutside]);

  return { isOpen, handleToggleMenu, themeBtnAreaRef };
}
