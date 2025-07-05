'use client';

import { useActionState, useEffect } from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';

import { LoginField } from '@/auth/components/LoginField';
import { SubmitButton } from '@/auth/components/SubmitButton';
import { authenticate } from '@/auth/actions/login';
import { useRouter } from 'next/navigation';

export const LoginForm = () => {
  const [state, dispatch] = useActionState(authenticate, undefined);
  const router = useRouter();

  useEffect(() => {
    if (state === 'Success') {
      router.replace('/dashboard');
    }
  }, [state]);

  return (
    <>
      <form className='space-y-5' action={dispatch}>
        <LoginField
          name='email'
          label='Email'
          type='email'
          placeholder='Enter your email address'
        />

        <LoginField
          name='password'
          label='Password'
          type='password'
          placeholder='Enter your password'
        />

        {state === 'CredentialsSignin' && (
          <div
            className='flex items-center space-x-2'
            aria-live='polite'
            aria-atomic='true'
          >
            <Icon
              icon='line-md:alert-circle'
              width={20}
              height={20}
              className='text-red-500'
            />
            <p className='text-sm text-red-500'>Invalid credentials.</p>
          </div>
        )}

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
    </>
  );
};
