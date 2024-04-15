import { forwardRef } from 'react';
import type { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import type { FieldError } from 'react-hook-form';

type FormInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  isError?: FieldError;
  hasDeleteBtn?: boolean;
};

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ isError, hasDeleteBtn, className, ...props }, ref) => (
    <input
      {...props}
      ref={ref}
      autoComplete="off"
      className={`
        ${isError ? 'border-red-500 bg-red-100' : 'bg-gray-100 focus:border-blue-500'}
        ${hasDeleteBtn ? 'pr-12' : ''}
        ${className ?? ''}
        peerInput block w-full rounded border px-3 py-2 text-base text-gray-700 outline-none transition-colors placeholder:text-gray-500 focus:bg-gray-000 peer-[Input]:mt-2
      `}
    />
  ),
);

export default FormInput;
