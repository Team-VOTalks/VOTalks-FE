'use client';

import useVoteList from '../lib/use-vote-list';
import VoteContent from './vote-content';
import VoteSkeleton from './vote-skeleton';
import VoteCategory from './vote-category';
import * as Shared from '@/shared';

export default function VoteList() {
  const { data, isLoading, currentCategory, setCategory } = useVoteList();

  return (
    <>
      <div className="mb-8">
        <VoteCategory {...{ currentCategory, setCategory }} />
      </div>
      <ul className="relative flex flex-col items-stretch justify-start gap-7 md:grid md:grid-cols-2 md:gap-5">
        {isLoading ? (
          Array.from({ length: 8 }, (_, i) => i + 1).map(i => (
            <li key={String(i)} className="py-4">
              <VoteSkeleton />
            </li>
          ))
        ) : data && data.content.length > 0 ? (
          data.content.map(data => (
            <li key={data.voteId} className="block h-fit rounded-lg border p-4">
              <VoteContent data={data} type="list" />
            </li>
          ))
        ) : (
          <li>
            <Shared.ui.GuideTxt content="투표가 없습니다" />
          </li>
        )}
      </ul>
    </>
  );
}
