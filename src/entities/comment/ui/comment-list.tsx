'use client';

import { useQuery } from '@tanstack/react-query';
import getComments from '../api/get-comments';
import CommentItem from './comment-item';
import * as Shared from '@/shared';

export default function CommentList({ id }: { id: string }) {
  const { data, isLoading } = useQuery({
    queryKey: ['comments', id],
    queryFn: () => getComments(id),
  });
  return isLoading ? (
    <div className="flex w-full items-center justify-center px-4 py-8 text-4xl text-gray-400">
      <Shared.ui.SpinnerCircle />
    </div>
  ) : (
    <ul>
      {data?.content.map((data, i) => (
        <li key={i + 1} className="peerCommentList peer-[CommentList]:mt-6">
          <CommentItem data={data} />
        </li>
      ))}
    </ul>
  );
}
