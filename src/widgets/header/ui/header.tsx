import HeaderLogo from './header-logo';
import HeaderCreateVoteBtn from './header-create-vote-btn';
import * as Features from '@/features';

export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 inline-block h-14 border-b bg-gray-000 px-5 text-[0px] sm:h-16">
      <div className="m-auto flex h-full w-full min-w-[240px] max-w-5xl items-center justify-between gap-5 py-2">
        <HeaderLogo />
        <div className="flex items-center justify-end gap-2">
          <Features.ThemeBtn />
          <HeaderCreateVoteBtn />
        </div>
      </div>
    </header>
  );
}
