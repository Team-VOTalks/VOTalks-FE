'use client';

import { useQuery } from '@tanstack/react-query';
import getComments from '../api/get-comments';
import CommentItem from './comment-item';
import * as Shared from '@/shared';

export default function CommentList({ voteId }: { voteId: string }) {
  const { data, isLoading } = useQuery({
    queryKey: ['votes', voteId, 'comments'],
    queryFn: () => getComments(voteId),
  });
  return isLoading ? (
    <div className="flex w-full items-center justify-center px-4 py-8 text-4xl text-gray-400">
      <Shared.ui.SpinnerCircle />
    </div>
  ) : (
    <ul>
      {data?.content.map(data => (
        <li key={data.commentId} className="peerCommentList peer-[CommentList]:mt-6">
          <CommentItem data={data} />
        </li>
      ))}
    </ul>
  );
}
