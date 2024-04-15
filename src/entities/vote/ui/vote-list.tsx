'use client';

import { useQuery } from '@tanstack/react-query';
import getVotes from '../api/get-votes';
import VoteContent from './vote-content';
import VoteSkeleton from './vote-skeleton';

export default function VoteList() {
  const { data, isLoading } = useQuery({ queryKey: ['votes'], queryFn: getVotes });

  return (
    <ul className="flex flex-col items-stretch justify-start gap-7 md:grid md:grid-cols-2 md:gap-5">
      {isLoading
        ? Array.from({ length: 8 }, (_, i) => i + 1).map(i => (
            <li key={String(i)} className="py-4">
              <VoteSkeleton />
            </li>
          ))
        : data?.content.map(data => (
            <li key={data.voteId} className="block h-fit rounded-lg border p-4">
              <VoteContent data={data} type="list" />
            </li>
          ))}
    </ul>
  );
}
