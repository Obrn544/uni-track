import { FieldError, UseFormRegister } from 'react-hook-form';
import { Icon } from '@iconify/react';
import clsx from 'clsx';

import { RegisterFormInputs } from '@/auth/components/RegisterForm';

interface Props {
  label: string;
  name: keyof RegisterFormInputs;
  type: string;
  placeholder: string;
  register: UseFormRegister<RegisterFormInputs>;
  errors: FieldError | undefined;
  pattern?: {
    value: RegExp;
    message: string;
  };
  minLength?: {
    value: number;
    message: string;
  };
  maxLength?: {
    value: number;
    message: string;
  };
  validate?: (value: string) => string | boolean;
}

export const RegisterField = ({
  label,
  name,
  type,
  placeholder,
  register,
  errors,
  pattern,
  minLength,
  maxLength,
  validate,
}: Props) => {
  return (
    <div className='flex flex-col space-y-2'>
      <label htmlFor={name} className='font-medium'>
        {label}
      </label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        className={clsx(
          'h-12 rounded-xl border-2 border-gray-300 bg-white/70 p-4 backdrop-blur-sm transition-all duration-200 focus:border-purple-500 focus:ring-2 focus:ring-blue-50 focus:outline-none',
          errors && 'border-red-500 focus:border-red-500 focus:ring-red-50',
        )}
        required
        {...register(name, {
          required: {
            value: true,
            message: `${label} is required`,
          },
          pattern,
          minLength,
          maxLength,
          validate,
        })}
      />
      {errors && (
        <div className='flex items-center space-x-2 text-sm text-red-500'>
          <Icon icon='line-md:alert-circle' width={16} height={16} />
          <span>{errors.message}</span>
        </div>
      )}
    </div>
  );
};
