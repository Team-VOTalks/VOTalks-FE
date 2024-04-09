import { DetailedHTMLProps, TextareaHTMLAttributes, forwardRef } from 'react';
import { type FieldError } from 'react-hook-form';

type FormTextareaProps = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & { isError?: FieldError };

const FormTextarea = forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ className, children, isError, ...props }, ref) => (
    <textarea
      {...props}
      ref={ref}
      className={`
        ${isError ? 'border-red-500 bg-red-100' : 'bg-gray-100 focus:border-blue-500'}
        ${className ?? ''}
        block min-h-24 w-full resize-none rounded border px-3 py-2 text-base text-gray-700 outline-none transition-colors placeholder:text-gray-500 focus:bg-gray-000
      `}
    >
      {children}
    </textarea>
  ),
);

export default FormTextarea;
