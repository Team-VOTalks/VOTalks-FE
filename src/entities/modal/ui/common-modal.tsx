'use client';

import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import ModalContainer from './modal-container';

export default function CommonModal({
  content,
  isOpen,
  setIsOpen,
  resolve,
  reject,
}: {
  content: ReactNode;
  isOpen: boolean;
  setIsOpen: () => void;
  resolve?: () => void;
  reject?: () => void;
}) {
  if (typeof window === 'undefined') return <></>;
  return createPortal(
    <ModalContainer isOpen={isOpen}>
      <div className="flex h-auto min-h-48 w-full flex-col items-stretch justify-between">
        <div>{content}</div>
        <p className="mt-6 flex items-center justify-between gap-3 border-t pt-3 sm:justify-end">
          <button
            type="button"
            title="취소"
            className="block min-w-20 rounded bg-gray-100 p-2 text-sm font-medium text-gray-600 sm:w-auto sm:text-base"
            onClick={() => {
              if (reject !== undefined) reject();
              setIsOpen();
            }}
          >
            취소
          </button>
          <button
            type="button"
            title="확인"
            className="block min-w-20 flex-grow rounded bg-blue-100 p-2 text-sm font-medium text-blue-500 sm:w-auto sm:flex-grow-0 sm:text-base"
            onClick={() => {
              if (resolve !== undefined) resolve();
              setIsOpen();
            }}
          >
            확인
          </button>
        </p>
      </div>
    </ModalContainer>,
    document.getElementById('modal-root') as HTMLDivElement,
  );
}
