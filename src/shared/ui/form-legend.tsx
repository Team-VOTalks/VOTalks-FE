import { ReactNode } from 'react';

export default function FormLegend({ children }: { children: ReactNode }) {
  return (
    <legend className="mb-2 block w-full px-1 text-sm font-medium text-gray-500">{children}</legend>
  );
}
