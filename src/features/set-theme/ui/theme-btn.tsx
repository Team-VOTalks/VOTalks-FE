'use client';
import * as Shared from '@/shared';
import ThemeMenu from './theme-menu';
import useThemeBtnDropdown from '../lib/use-theme-btn-dropdown';

export default function ThemeBtn() {
  const { isOpen, handleToggleMenu, themeBtnAreaRef } = useThemeBtnDropdown();

  return (
    <div className="relative" ref={themeBtnAreaRef}>
      <button
        type="button"
        className="flex items-center justify-center gap-1 rounded bg-gray-100 p-2 text-lg disabled:bg-gray-200 sm:text-xl"
        onClick={handleToggleMenu}
      >
        <Shared.ui.IconSun />
        <span className="hidden whitespace-nowrap text-sm font-medium sm:block sm:text-base">
          테마 변경
        </span>
        <Shared.ui.IconDropdownAppearance isRotate={isOpen} />
      </button>
      <ThemeMenu isOpen={isOpen} />
    </div>
  );
}
