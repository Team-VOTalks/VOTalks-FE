'use client';

import { useQuery } from '@tanstack/react-query';
import getVotes from '../api/get-votes';
import VoteContent from './vote-content';

export default function VoteList() {
  const { data, isLoading } = useQuery({ queryKey: ['votes'], queryFn: getVotes });

  if (isLoading) return <p>list loading...</p>;
  return (
    <ul className="flex flex-col items-stretch justify-start gap-7 md:grid md:grid-cols-2 md:gap-5">
      {data?.content.map(data => (
        <li key={data.voteId} className="block h-fit rounded-lg border p-4">
          <VoteContent data={data} type="list" />
        </li>
      ))}
    </ul>
  );
}
