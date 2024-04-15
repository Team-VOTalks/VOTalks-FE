import * as Entities from '@/entities';
import type { Metadata } from 'next';

type Props = { params: { id: string } };

export async function generateMetadata({ params: { id } }: Props): Promise<Metadata> {
  const vote = await Entities.getVote(id);
  return {
    title: vote.title,
    description: vote.voteOptionWithCount.map(e => e.title).join(' vs '),
  };
}

export default async function VoteDetailPage({ params: { id } }: Props) {
  const data = await Entities.getVote(id);
  return (
    <div className="py-6">
      <Entities.VoteContent data={data} type="detail" />
      <div className="mt-6 border-t pt-6">{/* 댓글 클라이언트 컴포넌트 임베드 */}</div>
    </div>
  );
}
