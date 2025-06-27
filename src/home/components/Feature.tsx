import { Icon } from '@iconify/react';

interface Props {
  icon: string;
  title: string;
  description: string;
  background: string;
}

export const Feature = ({ icon, title, description, background }: Props) => {
  return (
    <>
      <div className='transform rounded-2xl border-0 bg-white/80 shadow-lg backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:shadow-xl'>
        <div className='space-y-4 p-8 text-center'>
          <div
            className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${background}`}
          >
            <Icon icon={icon} width={32} height={32} color='#ffffff' />
          </div>
          <h3 className='text-foreground text-xl font-semibold'>{title}</h3>
          <p className='text-secondary'>{description}</p>
        </div>
      </div>
    </>
  );
};
