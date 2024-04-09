import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';

export default function FormTextarea({
  className,
  children,
  ...props
}: DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={`
        ${className}
        block min-h-24 w-full resize-none rounded border bg-gray-100 px-3 py-2 text-base text-gray-700 outline-none transition-colors placeholder:text-gray-500 focus:border-blue-500 focus:bg-gray-000
      `}
    >
      {children}
    </textarea>
  );
}
