import { Theme } from '../types/theme';
import * as Shared from '@/shared';

export default function ThemeMenu({
  isOpen,
  setTheme,
}: {
  isOpen: boolean;
  setTheme: (theme: Theme) => void;
}) {
  const delayedOfVisible = Shared.lib.useDelayForTransition(isOpen, 100);

  return (
    <ul
      className={`
        ${isOpen ? 'visible' : 'invisible hidden'} 
        ${delayedOfVisible ? 'opacity-100' : 'opacity-0'} 
        absolute -right-3 top-10 w-40 rounded border bg-gray-000 p-1 text-base transition-opacity sm:left-0 sm:right-auto sm:top-12 sm:w-44 sm:p-2
      `}
      role="list"
    >
      {[
        ['시스템 설정 사용', <Shared.ui.IconSetting />, () => setTheme('system')],
        ['밝은 테마', <Shared.ui.IconSun />, () => setTheme('light')],
        ['어두운 테마', <Shared.ui.IconMoon />, () => setTheme('dark')],
      ].map(([label, icon, event]) => (
        <li className="block" role="listitem" key={label as string}>
          <button
            type="button"
            className="flex w-full items-center justify-start gap-1 rounded bg-gray-000 p-2 active:bg-gray-100 sm:gap-2 sm:text-lg sm:hover:bg-gray-100 sm:active:bg-gray-000"
            onClick={event as () => void}
          >
            <span className="flex h-5 w-5 items-center justify-center">{icon as JSX.Element}</span>
            <span className="text-sm sm:text-base">{label as string}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}
