'use client';

import useCommentForm from '../lib/use-comment-form';
import * as Shared from '@/shared';

export default function CommentForm({ id }: { id: string }) {
  const { textAreaRef, handleResizeHeightOfTextarea, handleFormSubmit } = useCommentForm(id);
  return (
    <form className="relative block" onSubmit={handleFormSubmit}>
      <textarea
        ref={textAreaRef}
        autoComplete="off"
        placeholder="댓글을 입력해주세요"
        name="comment"
        className="block h-12 max-h-60 min-h-12 w-full resize-none rounded border bg-gray-100 pb-3 pl-3 pr-12 pt-2 outline-none transition-colors placeholder:text-gray-500 focus:border-blue-500 focus:bg-gray-000 sm:min-h-20"
        onChange={handleResizeHeightOfTextarea}
      ></textarea>
      <button
        type="submit"
        className="absolute bottom-0 right-0 flex h-12 w-12 items-center justify-center p-3 text-xl text-gray-600"
      >
        <Shared.ui.IconSend />
        <span className="blind">댓글 쓰기</span>
      </button>
    </form>
  );
}
