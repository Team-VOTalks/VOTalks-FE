import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import * as Entities from '@/entities';

type Props = { params: { id: string } };

export async function generateMetadata({ params: { id } }: Props): Promise<Metadata> {
  const vote = await Entities.getVote(id);
  return {
    title: vote.title,
    description: vote.voteOption.map(e => e.title).join(' vs '),
  };
}

const CommentListOfClient = dynamic(() => import('@/entities/comment/ui/comment-list'), {
  ssr: false,
});

export default async function VoteDetailPage({ params: { id } }: Props) {
  const data = await Entities.getVote(id);
  return (
    <div className="py-6">
      <Entities.VoteContent data={data} type="detail" />
      <div className="mt-6 border-t pt-6">
        <div className="mb-8">
          <div className="mb-2 flex items-center justify-between">
            <h4 className="px-1 text-lg font-bold sm:text-xl">
              댓글
              <span className="ml-2 text-sm font-normal text-gray-500 sm:text-base">
                {new Intl.NumberFormat().format(data.totalCommentCount)}
              </span>
            </h4>
          </div>
          <Entities.CommentForm voteId={id} />
        </div>
        <CommentListOfClient voteId={id} />
      </div>
    </div>
  );
}
