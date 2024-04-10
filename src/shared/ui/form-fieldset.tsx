import { ReactNode } from 'react';

export default function FormFieldset({ children }: { children: ReactNode }) {
  return <fieldset className="relative mb-5 block w-full">{children}</fieldset>;
}
