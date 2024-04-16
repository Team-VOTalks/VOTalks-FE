import type { ChangeEvent, FormEvent } from 'react';
import { useCallback, useRef } from 'react';
import postComments from '../api/post-comments';

export default function useCommentForm(id: string) {
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleResizeHeightOfTextarea = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    if (!!textAreaRef.current) {
      textAreaRef.current.style.height = '48px';
      textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px';
    }
  }, []);

  const handleFormSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!(textAreaRef.current && textAreaRef.current.value.trim())) return;

    postComments(id, textAreaRef.current.value)
      .then(() => {
        if (!!textAreaRef.current) {
          textAreaRef.current.value = '';
          textAreaRef.current.style.height = '48px';
          textAreaRef.current.disabled = false;
        }
        // TODO: 데이터 최신화 로직 필요
      })
      .catch(err => {
        const { response } = err;
        const message = response?.data?.message ?? response?.statusText ?? '뭔가 잘못됐어요...';
        const status = response?.status ?? '000';
        console.warn(`[${status}] ${message}`);
      });
    textAreaRef.current.disabled = true;
  }, []);

  return { textAreaRef, handleResizeHeightOfTextarea, handleFormSubmit };
}
