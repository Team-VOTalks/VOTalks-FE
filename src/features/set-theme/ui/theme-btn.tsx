'use client';

import { useCallback } from 'react';
import dynamic from 'next/dynamic';
import useThemeBtnDropdown from '../lib/use-theme-btn-dropdown';
import useTheme from '../lib/use-theme';
import { type Theme } from '../types/theme';
import * as Shared from '@/shared';

const ThemeMenuOnClient = dynamic(() => import('./theme-menu'), { ssr: false });

export default function ThemeBtn() {
  const { isOpen, handleToggleMenu, themeBtnAreaRef } = useThemeBtnDropdown();
  const { currentTheme, realTheme, setTheme } = useTheme();

  const setCurrentTheme = useCallback((theme: Theme) => {
    setTheme(theme);
    handleToggleMenu();
  }, []);

  return (
    <div className="relative" ref={themeBtnAreaRef}>
      <button
        type="button"
        className="flex h-[34px] items-center justify-center gap-1 rounded bg-gray-100 p-2 text-lg disabled:bg-gray-200 sm:h-10 sm:pl-3 sm:text-xl"
        onClick={handleToggleMenu}
        title="테마 변경"
        role="button"
      >
        <span className="flex h-auto w-5 items-center justify-center">
          {realTheme === 'dark' ? <Shared.ui.IconMoon /> : <Shared.ui.IconSun />}
        </span>
        <Shared.ui.IconDropdownAppearance isRotate={isOpen} />
      </button>
      <ThemeMenuOnClient isOpen={isOpen} currentTheme={currentTheme} setTheme={setCurrentTheme} />
    </div>
  );
}
