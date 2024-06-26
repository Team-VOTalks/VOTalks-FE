'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ROUTE_OF_CREATE_FORM_TO_VOTE } from '../constants';
import * as Shared from '@/shared';

export default function HeaderCreateVoteBtn() {
  const pathname = usePathname();

  return (
    <Link
      href={ROUTE_OF_CREATE_FORM_TO_VOTE}
      title="투표 만들기"
      className={`
        ${pathname === ROUTE_OF_CREATE_FORM_TO_VOTE ? 'pointer-events-none' : ''}
        flex items-center justify-center gap-1 rounded bg-blue-500 p-2 pr-3 text-lg text-white disabled:bg-gray-200 sm:text-xl
      `}
    >
      <Shared.ui.IconPlus />
      <span className="hidden whitespace-nowrap text-sm font-medium leading-none sm:block sm:text-base">
        투표 만들기
      </span>
      <span className="block whitespace-nowrap text-sm font-medium leading-none sm:hidden sm:text-base">
        투표
      </span>
    </Link>
  );
}
