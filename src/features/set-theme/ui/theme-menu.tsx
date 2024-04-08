import { Theme } from '../types/theme';
import * as Shared from '@/shared';

export default function ThemeMenu({
  isOpen,
  setTheme,
  currentTheme,
}: {
  isOpen: boolean;
  setTheme: (theme: Theme) => void;
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
      {[
        ['system', '시스템 테마', <Shared.ui.IconSetting />],
        ['light', '밝은 테마', <Shared.ui.IconSun />],
        ['dark', '어두운 테마', <Shared.ui.IconMoon />],
      ].map(([theme, label, icon]) => (
        <li className="block" role="listitem" key={label as string}>
          <button
            type="button"
            className="flex w-full items-center justify-start gap-1 rounded bg-gray-000 p-2 active:bg-gray-100 sm:gap-2 sm:text-lg sm:hover:bg-gray-100 sm:active:bg-gray-000"
            onClick={() => setTheme(theme as Theme)}
          >
            <span className="flex h-5 w-5 items-center justify-center">{icon as JSX.Element}</span>
            <span className="whitespace-nowrap text-sm sm:text-base">
              {label as string}
              <span className="inline text-xs text-gray-500 sm:text-sm">
                {currentTheme === (theme as Theme) && ' (선택됨)'}
              </span>
            </span>
          </button>
        </li>
      ))}
    </ul>
  );
}
