import ThemeMenuItem from './theme-menu-item';
import * as Shared from '@/shared';

export default function ThemeMenu({ isOpen }: { isOpen: boolean }) {
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
      <ThemeMenuItem label="시스템 설정 사용" icon={<Shared.ui.IconSetting />} />
      <ThemeMenuItem label="밝은 테마" icon={<Shared.ui.IconSun />} />
      <ThemeMenuItem label="어두운 테마" icon={<Shared.ui.IconMoon />} />
    </ul>
  );
}
