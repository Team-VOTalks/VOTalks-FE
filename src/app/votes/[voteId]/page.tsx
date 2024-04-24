import type { Metadata } from 'next';
import * as Entities from '@/entities';

type Props = { params: { voteId: string } };

export async function generateMetadata({ params: { voteId } }: Props): Promise<Metadata> {
  const data = await Entities.getVote({ voteId });

  return {
    title: data?.title,
    description: data?.voteOption.map(e => e.title).join(' vs '),
  };
}

export default async function VoteDetailPage({ params: { voteId } }: Props) {
  const data = await Entities.getVote({ voteId });

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
          <Entities.CommentForm voteId={voteId} />
        </div>
        <Entities.CommentList voteId={voteId} />
      </div>
    </div>
  );
}
