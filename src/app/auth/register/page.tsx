import Link from 'next/link';

import { AuthHeader } from '@/auth/components/AuthHeader';
import { Field } from '@/auth/components/Field';
import { SubmitButton } from '@/auth/components/SubmitButton';

export default function RegisterPage() {
  return (
    <>
      <AuthHeader
        title='Create your account'
        description='Please enter your details to create your UniTrack account.'
      />

      <main className='space-y-6 px-8 pb-8'>
        <form className='space-y-5'>
          <Field label='Full Name' type='text' placeholder='John Doe' />

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

          <Field
            label='Confirm Password'
            type='password'
            placeholder='Confirm your password'
          />

          <SubmitButton label='Sign Up' />
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
