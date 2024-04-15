'use client';

import type { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import ModalContainer from './modal-container';

export default function CommonModal({
  children: content,
  isOpen,
  closeModal,
  resolve,
  reject,
}: {
  children: ReactNode;
  isOpen: boolean;
  closeModal: () => void;
  resolve?: () => void;
  reject?: () => void;
}) {
  if (typeof window === 'undefined') return <></>;
  return createPortal(
    <ModalContainer isOpen={isOpen}>
      <div className="flex h-auto min-h-40 w-full flex-col items-stretch justify-between">
        <div>{content}</div>
        <p className="mt-4 flex items-center justify-between gap-3 border-t pt-3 sm:justify-end">
          <button
            type="button"
            title="취소"
            className="block min-w-20 rounded bg-gray-100 p-2 text-sm font-medium sm:w-auto sm:text-base"
            onClick={() => {
              if (reject !== undefined) reject();
              closeModal();
            }}
          >
            취소
          </button>
          <button
            type="button"
            title="확인"
            className="block min-w-20 flex-grow rounded bg-blue-500 p-2 text-sm font-medium text-white sm:w-auto sm:flex-grow-0 sm:text-base"
            onClick={() => {
              if (resolve !== undefined) resolve();
              closeModal();
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
