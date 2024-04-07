'use client';

import { ReactNode } from 'react';
import useModalContainer from '../lib/use-modal-container';

export default function ModalContainer({
  children,
  isOpen,
}: Readonly<{
  children: ReactNode;
  isOpen: boolean;
}>) {
  const delayedOpen = useModalContainer(isOpen);

  if (!isOpen) return <></>;
  return (
    <div
      className={`fixed bottom-0 left-0 right-0 top-0 z-50 inline-flex items-center justify-center`}
    >
      <div
        className={`
          ${isOpen ? 'visible' : 'invisible'}
          ${delayedOpen ? '-translate-y-[12%] opacity-100' : 'translate-y-[4%] opacity-0'}
          pointer-events-auto relative z-10 block h-auto w-full min-w-60 max-w-[80%] rounded-lg border bg-gray-000 p-3 shadow transition delay-100 duration-300 ease-in-out sm:max-w-md sm:p-4
        `}
      >
        {children}
      </div>
      <div
        className={`
          ${delayedOpen ? 'opacity-30' : 'opacity-0'}
          pointer-events-none absolute bottom-0 left-0 right-0 top-0 z-0 bg-gray-700 transition-opacity
        `}
      ></div>
    </div>
  );
}
