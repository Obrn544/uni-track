import Link from 'next/link';
import { Icon } from '@iconify/react';

export default function Home() {
  return (
    <>
      <header className='bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            <Link href='/' className='flex items-center space-x-3'>
              <div className='p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl'>
                <Icon
                  icon='akar-icons:book'
                  color='#ffffff'
                  width={24}
                  height={24}
                />
              </div>
              <span className='text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                UniTrack
              </span>
            </Link>

            <nav className='flex items-center space-x-4'>
              <Link
                href='/login'
                className='text-gray-600 hover:text-gray-900 transition-colors font-medium'
              >
                Sign In
              </Link>
              <Link href='/login'>
                <button className='bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 cursor-pointer hover:to-purple-700 text-white rounded-xl py-2 px-6 transition-colors font-medium text-sm'>
                  Get Started
                </button>
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
