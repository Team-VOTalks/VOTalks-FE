import HeaderLogo from './header-logo';
import HeaderCreateVoteBtn from './header-create-vote-btn';

export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 inline-block h-16 border-b bg-gray-000 px-5 text-[0px]">
      <div className="m-auto flex h-full w-full min-w-[240px] max-w-5xl items-center justify-between gap-5 py-2">
        <HeaderLogo />
        <div className="flex items-center justify-end gap-2">
          <HeaderCreateVoteBtn />
        </div>
      </div>
    </header>
  );
}
