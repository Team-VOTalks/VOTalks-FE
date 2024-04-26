'use client';

import { useState } from 'react';
import type { Comment } from '../types';
import CommentContent from './comment-content';
import ReplyList from './reply-list';

export default function CommentItem({ voteId, data }: { voteId: string; data: Comment }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative block">
      <CommentContent data={data} />
      {data.totalReplyCount > 0 && (
        <div className="px-1">
          <button
            type="button"
            className="p-1 text-base text-gray-500"
            onClick={() => setIsOpen(prev => !prev)}
          >
            {isOpen ? '답글 숨기기' : `답글 ${data.totalReplyCount}개 더보기`}
          </button>
          {isOpen && <ReplyList voteId={voteId} commentId={data.commentId} />}
        </div>
      )}
    </div>
  );
}
