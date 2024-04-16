'use client';

import type { Comment } from '../types';
import CommentContent from './comment-content';

export default function CommentItem({ data }: { data: Comment }) {
  return (
    <div className="relative block">
      <CommentContent data={data} />
      {data.totalReplyCount > 0 && (
        <div className="p-1 text-base text-gray-500">
          <button type="button">{`답글 ${data.totalReplyCount}개 더보기`}</button>
        </div>
      )}
    </div>
  );
}
