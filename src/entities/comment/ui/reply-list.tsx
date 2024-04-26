'use client';

import useReplyList from '../lib/use-reply-list';
import * as Shared from '@/shared';
import CommentContent from './comment-content';

export default function ReplyList({ voteId, commentId }: { voteId: string; commentId: number }) {
  const { data, isLoading, isError, isFetchingNextPage, hasNextPage, fetchNextPage } = useReplyList(
    { voteId, commentId },
  );

  return isLoading ? (
    <div className="flex w-full items-center justify-center px-4 py-6 text-4xl text-gray-400">
      <Shared.ui.SpinnerCircle />
    </div>
  ) : isError ? (
    <div className="py-12 sm:py-20">
      <Shared.ui.EmptyResult content="댓글 조회에 실패하였습니다" />
    </div>
  ) : (
    <>
      {data?.pages.map((group, i) => (
        <ul key={i} className="mt-6 pl-6">
          {group.content.map(data => (
            <li key={data.replyId} className="peerCommentItem peer-[CommentItem]:mt-6">
              <CommentContent data={data} />
            </li>
          ))}
        </ul>
      ))}
      {hasNextPage && (
        <div className="mb-12 mt-6 pl-7">
          <button
            type="button"
            className="text-gray-500"
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
          >
            <span className="pr-2">
              {isFetchingNextPage ? '답글 불러오는 중...' : '답글 더보기'}
            </span>
          </button>
        </div>
      )}
    </>
  );
}
