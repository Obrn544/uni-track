import { Icon } from '@iconify/react';

interface Props {
  label: string;
}

export const SubmitButton = ({ label }: Props) => {
  return (
    <>
      <button
        type='submit'
        className='h-12 w-full transform rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 font-semibold text-white shadow-lg transition-all duration-200 hover:scale-[1.02] hover:from-blue-600 hover:to-purple-700 hover:shadow-xl disabled:transform-none disabled:cursor-not-allowed disabled:opacity-50'
      >
        <div className='flex items-center justify-center space-x-2'>
          <span>{label}</span>
          <Icon icon='icons8:right-arrow' width={16} height={16} />
        </div>
      </button>
    </>
  );
};
