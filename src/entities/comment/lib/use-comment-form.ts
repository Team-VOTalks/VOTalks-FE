import type { ChangeEvent, FormEvent } from 'react';
import { useCallback, useRef } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import postComments from '../api/post-comments';

export default function useCommentForm({ voteId }: { voteId: string }) {
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const submitBtnRef = useRef<HTMLButtonElement | null>(null);

  const handleResizeHeightOfTextarea = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    if (!!textAreaRef.current) {
      textAreaRef.current.style.height = '48px';
      textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px';
    }
  }, []);

  const queryClient = useQueryClient();

  const initValue = (initialValue: string) => {
    if (textAreaRef.current) {
      textAreaRef.current.value = initialValue;
      textAreaRef.current.style.height = '48px';
      textAreaRef.current.disabled = false;
    }
    if (submitBtnRef.current) {
      submitBtnRef.current.disabled = false;
    }
  };

  const handleFormSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!(textAreaRef.current && textAreaRef.current.value.trim())) return;

    submitBtnRef.current!.disabled = true;
    const commentValue = textAreaRef.current.value;
    textAreaRef.current.disabled = true;
    textAreaRef.current.value = '댓글 작성 중...';

    postComments(voteId, commentValue)
      .then(async () => {
        if (textAreaRef.current) textAreaRef.current.value = '데이터 불러오는 중...';
        await queryClient.refetchQueries({ queryKey: ['votes', voteId, 'comments'] });
        initValue('');
      })
      .catch(err => {
        const { response } = err;
        const message = response?.data?.message ?? response?.statusText ?? '뭔가 잘못됐어요...';
        const status = response?.status ?? '???';
        console.warn(`[${status}] ${message}`);
        initValue(commentValue);
      });
  }, []);

  return { textAreaRef, submitBtnRef, handleResizeHeightOfTextarea, handleFormSubmit };
}
