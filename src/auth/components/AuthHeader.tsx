import { Logo } from '@/core/shared/components/Logo';

interface Props {
  title: string;
  description: string;
}

export const AuthHeader = ({ title, description }: Props) => {
  return (
    <header className='flex flex-col items-center space-y-4 p-8'>
      <Logo />

      <div className='space-y-2 text-center'>
        <h2 className='text-2xl font-semibold'>{title}</h2>
        <p className='text-secondary text-base'>{description}</p>
      </div>
    </header>
  );
};
