'use client';

import * as Entities from '@/entities';

export default async function VoteDetailPage({ params: { id } }: { params: { id: string } }) {
  return (
    <div className="mx-auto w-full max-w-3xl py-5">
      <Entities.VoteDetail id={id} />
      <div className="mt-6 border-t pt-6"></div>
    </div>
  );
}
