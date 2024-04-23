'use client';

import useCommentList from '../lib/use-comment-list';
import CommentItem from './comment-item';
import * as Shared from '@/shared';

export default function CommentList({ voteId }: { voteId: string }) {
  const { data, isLoading, isError, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useCommentList({ voteId });

  return isLoading ? (
    <div className="flex w-full items-center justify-center px-4 py-8 text-4xl text-gray-400">
      <Shared.ui.SpinnerCircle />
    </div>
  ) : isError ? (
    <div className="py-12 sm:py-20">
      <Shared.ui.EmptyResult content="댓글 조회에 실패하였습니다" />
    </div>
  ) : (
    <>
      <ul>
        {data?.pages.map((group, i) => (
          <ul key={i} className="peerCommentList peer-[CommentList]:mt-6">
            {group.content.map(data => (
              <li key={data.commentId} className="peerCommentItem peer-[CommentItem]:mt-6">
                <CommentItem {...{ voteId, data }} />
              </li>
            ))}
          </ul>
        ))}
        {hasNextPage && (
          <div className="mt-12 flex w-full items-center justify-center">
            {isFetchingNextPage ? (
              <p className="relative h-12 text-4xl text-gray-400">
                <Shared.ui.SpinnerCircle />
                <span className="blind">댓글 불러오는 중...</span>
              </p>
            ) : (
              <button
                type="button"
                className="flex h-12 w-full items-center justify-center gap-1 rounded-lg bg-blue-100 p-3 text-blue-500 sm:min-w-48 md:w-auto"
                onClick={() => fetchNextPage()}
              >
                <Shared.ui.IconPlus />
                <span className="pr-2">댓글 더보기</span>
              </button>
            )}
          </div>
        )}
      </ul>
    </>
  );
}
