'use client';
import { usePathname, useRouter } from 'next/navigation';
import { ROUTE_OF_CREATE_FORM_TO_VOTE } from '../constants';
import { IconPlus } from '@/shared';

export default function HeaderCreateVoteBtn() {
  const pathname = usePathname();
  const router = useRouter();

  const handleBtnClick = () => {
    router.push(ROUTE_OF_CREATE_FORM_TO_VOTE);
  };

  return (
    <button
      className="flex items-center justify-center gap-1 rounded bg-blue-500 p-2 pr-3 text-lg text-white disabled:bg-gray-200 sm:text-xl"
      disabled={pathname === ROUTE_OF_CREATE_FORM_TO_VOTE}
      onClick={handleBtnClick}
    >
      <IconPlus />
      <span className="whitespace-nowrap text-sm font-medium sm:text-base">투표 만들기</span>
    </button>
  );
}
