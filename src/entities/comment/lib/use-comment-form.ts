import type { ChangeEvent, FormEvent } from 'react';
import { useCallback, useRef } from 'react';
import postComments from '../api/post-comments';

export default function useCommentForm(id: string) {
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const submitBtnRef = useRef<HTMLButtonElement | null>(null);

  const handleResizeHeightOfTextarea = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    if (!!textAreaRef.current) {
      textAreaRef.current.style.height = '48px';
      textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px';
    }
  }, []);

  const initValue = (initialValue: string) => {
    if (!!textAreaRef.current) {
      textAreaRef.current.value = initialValue;
      textAreaRef.current.style.height = '48px';
      textAreaRef.current.disabled = false;
    }
    if (!!submitBtnRef.current) {
      submitBtnRef.current.disabled = false;
    }
  };

  const handleFormSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!(textAreaRef.current && textAreaRef.current.value.trim())) return;
    if (!!submitBtnRef.current) submitBtnRef.current.disabled = true;

    const commentValue = textAreaRef.current.value;
    textAreaRef.current.disabled = true;
    textAreaRef.current.value = '댓글 작성 중...';

    postComments(id, commentValue)
      .then(() => {
        initValue('');
        // TODO: 데이터 최신화 로직 필요
      })
      .catch(err => {
        const { response } = err;
        const message = response?.data?.message ?? response?.statusText ?? '뭔가 잘못됐어요...';
        const status = response?.status ?? '000';
        console.warn(`[${status}] ${message}`);
        initValue(commentValue);
      });
  }, []);

  return { textAreaRef, submitBtnRef, handleResizeHeightOfTextarea, handleFormSubmit };
}
