import Link from 'next/link';
import { Icon } from '@iconify/react';

export const Logo = () => {
  return (
    <>
      <Link href='/' className='flex items-center space-x-3'>
        <div className='rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 p-2'>
          <Icon icon='tabler:users' color='#ffffff' width={24} height={24} />
        </div>
        <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-2xl font-bold text-transparent'>
          Tandemly
        </span>
      </Link>
    </>
  );
};
