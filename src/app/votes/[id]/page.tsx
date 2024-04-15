import * as Entities from '@/entities';
import type { Metadata } from 'next';

type Props = { params: { id: string } };

export async function generateMetadata({ params: { id } }: Props): Promise<Metadata> {
  const vote = await Entities.getVote(id);
  return { title: vote.title };
}

export default async function VoteDetailPage({ params: { id } }: Props) {
  return (
    <div className="mx-auto w-full py-5">
      <Entities.VoteDetail id={id} />
      <div className="mt-6 border-t pt-6"></div>
    </div>
  );
}
