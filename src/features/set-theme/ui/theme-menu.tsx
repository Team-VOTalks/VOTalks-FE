import ThemeMenuItem from './theme-menu-item';
import * as Shared from '@/shared';

export default function ThemeMenu({ isOpen }: { isOpen: boolean }) {
  const delayedOfVisible = Shared.lib.useDelayForTransition(isOpen, 100);

  return (
    <ul
      className={`
        ${isOpen ? 'visible' : 'invisible hidden'} 
        ${delayedOfVisible ? 'opacity-100' : 'opacity-0'} 
        absolute -right-2 top-10 w-40 rounded border bg-gray-000 p-2 text-base transition-opacity sm:left-0 sm:right-auto sm:top-12
      `}
      role="list"
    >
      {/* <ThemeMenuItem />
      <ThemeMenuItem />
      <ThemeMenuItem /> */}
    </ul>
  );
}
