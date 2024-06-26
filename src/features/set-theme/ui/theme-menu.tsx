'use client';

import type { Theme } from '../types';
import * as Shared from '@/shared';

export default function ThemeMenu({
  isOpen,
  setCurrentTheme,
  currentTheme,
}: {
  isOpen: boolean;
  setCurrentTheme: (theme: Theme) => void;
  currentTheme: Theme;
}) {
  const delayedOfVisible = Shared.lib.useDelayForTransition(isOpen, 100);

  return (
    <ul
      className={`
        ${isOpen ? 'visible' : 'invisible hidden'} 
        ${delayedOfVisible ? 'opacity-100' : 'opacity-0'} 
        absolute -left-9 top-10 w-44 rounded border bg-gray-000 p-1 text-base transition-opacity sm:-left-3 sm:top-12 sm:w-48 sm:p-2
      `}
      role="list"
    >
      {(
        [
          ['system', '시스템 테마', <Shared.ui.IconSetting />],
          ['light', '밝은 테마', <Shared.ui.IconSun />],
          ['dark', '어두운 테마', <Shared.ui.IconMoon />],
        ] as Array<[Theme, string, JSX.Element]>
      ).map(([theme, label, icon]) => (
        <li className="block" role="listitem" key={label}>
          <button
            type="button"
            title={`${label} 사용`}
            className="flex w-full items-center justify-start gap-1 rounded bg-gray-000 p-2 active:bg-gray-100 sm:gap-2 sm:text-lg sm:hover:bg-gray-100 sm:active:bg-gray-000"
            onClick={() => setCurrentTheme(theme)}
          >
            <span className="flex h-5 w-5 items-center justify-center">{icon}</span>
            <span
              className="whitespace-nowrap text-sm font-medium sm:text-base"
              suppressHydrationWarning
            >
              {label}
              {currentTheme === theme && (
                <small className="inline text-sm font-normal text-gray-500"> (선택됨)</small>
              )}
            </span>
          </button>
        </li>
      ))}
    </ul>
  );
}
