'use client';

import { Icon } from '@iconify/react';
import { useFormStatus } from 'react-dom';

interface Props {
  label: string;
}

export const SubmitButton = ({ label }: Props) => {
  const { pending } = useFormStatus();

  return (
    <>
      <button
        type='submit'
        className='h-12 w-full transform cursor-pointer rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 font-semibold text-white shadow-lg transition-all duration-200 hover:scale-[1.02] hover:from-blue-600 hover:to-purple-700 hover:shadow-xl disabled:opacity-50'
        disabled={pending}
      >
        <div className='flex items-center justify-center space-x-2'>
          <span>{label}</span>
          <Icon icon='icons8:right-arrow' width={16} height={16} />
        </div>
      </button>
    </>
  );
};
