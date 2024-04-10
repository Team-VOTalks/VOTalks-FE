import { type ReactNode } from 'react';

export default function FormLabel({
  htmlFor,
  children,
}: {
  htmlFor?: string;
  children: ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="peerLabel mb-2 inline-block w-auto px-1 text-sm font-medium text-gray-500 peer-[Label]:mt-4"
    >
      {children}
    </label>
  );
}
