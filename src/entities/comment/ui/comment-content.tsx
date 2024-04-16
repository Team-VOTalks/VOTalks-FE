import type { Comment } from '../types';
import * as Shared from '@/shared';

export default function CommentContent({ data }: { data: Comment }) {
  return (
    <>
      <p className="mb-1 flex items-center justify-start gap-1">
        <strong className="text-sm font-medium sm:text-base">익명{data.user}</strong>
        <span className="text-sm text-gray-500 sm:text-base">
          &middot; {new Intl.DateTimeFormat().format(new Date(data.createAt))}
        </span>
      </p>
      <p className="mb-1 break-keep text-base sm:text-lg">{data.title}</p>
      <p className="mb-2 flex items-center justify-start gap-2">
        <button
          type="button"
          className="flex items-center justify-center gap-1 rounded p-1 text-lg text-gray-600 active:bg-gray-100 sm:text-xl sm:hover:bg-gray-100"
        >
          <Shared.ui.IconLike fill={false} />
          <span className="text-sm sm:text-base">{data.likeCount}</span>
        </button>
        <button
          type="button"
          className="flex items-center justify-center gap-1 rounded p-1 text-lg text-gray-600 active:bg-gray-100 sm:text-xl sm:hover:bg-gray-100"
        >
          <Shared.ui.IconDislike fill={false} />
          <span className="text-sm sm:text-base">{data.dislikeCount}</span>
        </button>
        <button
          type="button"
          className="rounded p-1 px-2 text-sm text-gray-600 active:bg-gray-100 sm:text-base sm:hover:bg-gray-100"
        >
          답글 달기
        </button>
      </p>
    </>
  );
}