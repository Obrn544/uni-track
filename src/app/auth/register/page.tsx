import Link from 'next/link';
import { Icon } from '@iconify/react';

import { Logo } from '@/core/shared/components/Logo';

export default function RegisterPage() {
  return (
    <>
      <header className='flex flex-col items-center space-y-4 p-8'>
        <Logo />

        <div className='space-y-2 text-center'>
          <h2 className='text-2xl font-semibold'>Create your account</h2>
          <p className='text-secondary text-base'>
            Please enter your details to create your UniTrack account.
          </p>
        </div>
      </header>

      <main className='space-y-6 px-8 pb-8'>
        <form className='space-y-5'>
          <div className='flex flex-col space-y-2'>
            <label
              htmlFor='fullName'
              className='text-sm font-medium text-gray-700'
            >
              Full Name
            </label>
            <input
              id='fullName'
              type='text'
              placeholder='John Doe'
              className='h-12 rounded-xl border-2 border-gray-300 bg-white/70 p-4 text-base backdrop-blur-sm transition-all duration-200 focus:border-purple-500 focus:ring-2 focus:ring-blue-50 focus:outline-none'
              required
            />
          </div>

          <div className='flex flex-col space-y-2'>
            <label
              htmlFor='email'
              className='text-sm font-medium text-gray-700'
            >
              Email Address
            </label>
            <input
              id='email'
              type='email'
              placeholder='student@university.edu'
              className='h-12 rounded-xl border-2 border-gray-300 bg-white/70 p-4 text-base backdrop-blur-sm transition-all duration-200 focus:border-purple-500 focus:ring-2 focus:ring-blue-50 focus:outline-none'
              required
            />
          </div>

          <div className='flex flex-col space-y-2'>
            <label
              htmlFor='password'
              className='text-sm font-medium text-gray-700'
            >
              Password
            </label>

            <input
              id='password'
              type='password'
              placeholder='Enter your password'
              className='h-12 rounded-xl border-2 border-gray-300 bg-white/70 p-4 text-base backdrop-blur-sm transition-all duration-200 focus:border-purple-500 focus:ring-2 focus:ring-blue-50 focus:outline-none'
              required
            />
          </div>

          <div className='flex flex-col space-y-2'>
            <label
              htmlFor='confirm-password'
              className='text-sm font-medium text-gray-700'
            >
              Confirm Password
            </label>

            <input
              id='confirm-password'
              type='password'
              placeholder='Confirm your password'
              className='h-12 rounded-xl border-2 border-gray-300 bg-white/70 p-4 text-base backdrop-blur-sm transition-all duration-200 focus:border-purple-500 focus:ring-2 focus:ring-blue-50 focus:outline-none'
              required
            />
          </div>

          <button
            type='submit'
            className='h-12 w-full transform rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 font-semibold text-white shadow-lg transition-all duration-200 hover:scale-[1.02] hover:from-blue-600 hover:to-purple-700 hover:shadow-xl disabled:transform-none disabled:cursor-not-allowed disabled:opacity-50'
          >
            <div className='flex items-center justify-center space-x-2'>
              <span>Sign Up</span>
              <Icon icon='icons8:right-arrow' width={16} height={16} />
            </div>
          </button>
        </form>

        <div className='pt-4 text-center'>
          <p className='text-gray-600'>
            Already have an account?{' '}
            <Link
              href='/auth/login'
              className='font-semibold text-blue-600 transition-colors hover:text-blue-700 hover:underline'
            >
              Sign in
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
