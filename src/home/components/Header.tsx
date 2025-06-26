import Link from 'next/link';
import { Icon } from '@iconify/react';

export const Header = () => {
  return (
    <>
      <header className='border-separator bg-background/80 sticky top-0 z-50 border-b backdrop-blur-md'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='flex h-16 items-center justify-between'>
            <Link href='/' className='flex items-center space-x-3'>
              <div className='rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 p-2'>
                <Icon
                  icon='akar-icons:book'
                  color='#ffffff'
                  width={24}
                  height={24}
                />
              </div>
              <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-2xl font-bold text-transparent'>
                UniTrack
              </span>
            </Link>

            <nav className='flex items-center space-x-4'>
              <Link
                href='/login'
                className='text-secondary hover:text-foreground font-medium transition-colors'
              >
                Sign In
              </Link>
              <Link href='/login'>
                <button className='cursor-pointer rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 text-sm font-medium text-white transition-colors hover:from-blue-600 hover:to-purple-700'>
                  Get Started
                </button>
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};
