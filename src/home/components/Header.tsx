import Link from 'next/link';

import { Logo } from '@/core/shared/components/Logo';

export const Header = () => {
  return (
    <>
      <header className='border-separator bg-background/80 sticky top-0 z-50 border-b backdrop-blur-md'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='flex h-16 items-center justify-between'>
            <Logo />

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
