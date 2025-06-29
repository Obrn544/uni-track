import Link from 'next/link';

import { AuthHeader } from '@/auth/components/AuthHeader';
import { Field } from '@/auth/components/Field';
import { SubmitButton } from '@/auth/components/SubmitButton';

export default function LoginPage() {
  return (
    <>
      <AuthHeader
        title='Welcome back'
        description='Please enter your email address and password to sign in to your UniTrack account.'
      />

      <main className='space-y-6 px-8 pb-8'>
        <form className='space-y-5'>
          <Field
            label='Email'
            type='email'
            placeholder='student@university.edu'
          />

          <Field
            label='Password'
            type='password'
            placeholder='Enter your password'
          />

          <div className='flex justify-end'>
            <Link
              href='/forgot-password'
              className='text-sm font-medium text-blue-600 transition-colors hover:text-blue-700 hover:underline'
            >
              Forgot your password?
            </Link>
          </div>

          <SubmitButton label='Sign In' />
        </form>

        <div className='pt-4 text-center'>
          <p className='text-gray-600'>
            Don't have an account?{' '}
            <Link
              href='/auth/register'
              className='font-semibold text-blue-600 transition-colors hover:text-blue-700 hover:underline'
            >
              Sign up
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
