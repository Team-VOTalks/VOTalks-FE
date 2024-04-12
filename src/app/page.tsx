'use client';

import { Vote } from '@/entities/vote/types';
import { http } from '@/shared/api';
import { useState } from 'react';
import * as Shared from '@/shared';
import VoteItem from '@/entities/vote/ui/vote-item';

export default function MainPage() {
  const [voteData, setVoteData] = useState<Vote[]>([]);
  const [isPending, setIsPending] = useState(false);
  return (
    <main>
      <div className="my-8 flex items-center justify-center">
        <button
          type="button"
          onClick={async () => {
            setIsPending(true);
            const { data }: { data: { content: Vote[] } } = await http.get('/votes');
            setVoteData(data.content);
            setIsPending(false);
          }}
          disabled={isPending}
          className="flex min-h-12 min-w-28 items-center justify-center gap-2 rounded bg-gray-100 p-3"
        >
          {isPending ? <Shared.ui.SpinnerBar /> : 'api 호출'}
        </button>
      </div>
      <ul className="flex flex-col items-stretch justify-start gap-7 md:grid md:grid-cols-2 md:gap-5">
        {voteData.map(data => (
          <li key={data.voteId} className="block h-fit rounded-lg border p-4">
            <VoteItem data={data} />
          </li>
        ))}
      </ul>
    </main>
  );
}
