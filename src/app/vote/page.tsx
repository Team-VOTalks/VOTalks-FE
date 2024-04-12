'use client';

import { useSearchParams } from 'next/navigation';

export default function VoteListPage() {
  const params = useSearchParams();
  console.log(params.get('category'));
  return <div>VoteListPage</div>;
}
