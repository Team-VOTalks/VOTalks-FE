'use client';

import React from 'react';
import useVoteList from '../lib/use-vote-list';
import VoteContent from './vote-content';
import VoteSkeleton from './vote-skeleton';
import VoteCategory from './vote-category';
import * as Shared from '@/shared';

const styleOfList =
  'peerVoteList relative flex flex-col items-stretch justify-start gap-7 peer-[VoteList]:mt-7 md:grid md:grid-cols-2 md:gap-5 md:peer-[VoteList]:mt-5';

export default function VoteList() {
  const {
    data,
    isLoading,
    isError,
    currentCategory,
    setCategory,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useVoteList();

  return (
    <>
      <div className="mb-8">
        <VoteCategory {...{ currentCategory, setCategory }} />
      </div>
      {isLoading ? (
        <ul className={styleOfList}>
          {Array.from({ length: 2 }, (_, i) => i + 1).map(i => (
            <li key={i} className="py-4">
              <VoteSkeleton />
            </li>
          ))}
        </ul>
      ) : isError ? (
        <div className="py-12 sm:py-20">
          <Shared.ui.EmptyResult content="투표 조회에 실패하였습니다" />
        </div>
      ) : (
        data?.pages.map((group, i) =>
          group.content.length > 0 ? (
            <ul className={styleOfList} key={i}>
              {group.content.map(data => (
                <li key={data.voteId} className="block h-fit rounded-lg border p-4">
                  <VoteContent data={data} type="list" />
                </li>
              ))}
            </ul>
          ) : (
            <div className="py-12 sm:py-20">
              <Shared.ui.EmptyResult content="투표가 없습니다" />
            </div>
          ),
        )
      )}
      {hasNextPage && (
        <div className="mt-12 flex w-full items-center justify-center">
          {isFetchingNextPage ? (
            <p className="relative h-12 text-4xl text-gray-400">
              <Shared.ui.SpinnerCircle />
              <span className="blind">투표 불러오는 중...</span>
            </p>
          ) : (
            <button
              type="button"
              className="flex h-12 w-full items-center justify-center gap-1 rounded-lg bg-blue-100 p-3 text-blue-500 sm:min-w-48 md:w-auto"
              onClick={() => fetchNextPage()}
            >
              <Shared.ui.IconPlus />
              <span className="pr-2">투표 더보기</span>
            </button>
          )}
        </div>
      )}
    </>
  );
}
