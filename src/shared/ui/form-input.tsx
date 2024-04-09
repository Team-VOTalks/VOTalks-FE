import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export default function FormInput({
  isError,
  hasDeleteBtn,
  className,
  ...props
}: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  isError?: boolean;
  hasDeleteBtn?: boolean;
}) {
  return (
    <input
      {...props}
      autoComplete="off"
      className={`
        ${isError ? 'focus:border-red-500' : 'focus:border-blue-500'}
        ${hasDeleteBtn ? 'pr-12' : ''}
        ${className ?? ''}
        peerInput block w-full rounded border bg-gray-100 px-3 py-2 text-base text-gray-700 outline-none transition-colors placeholder:text-gray-500 focus:bg-gray-000 peer-[Input]:mt-2
      `}
    />
  );
}
