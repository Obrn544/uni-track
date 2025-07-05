import Link from 'next/link';

import { AuthHeader } from '@/auth/components/AuthHeader';
import { LoginForm } from '@/auth/components/LoginForm';

export default function LoginPage() {
  return (
    <>
      <AuthHeader
        title='Welcome back'
        description='Sign in to continue collaborating with your team'
      />

      <main className='space-y-6 px-8 pb-8'>
        <LoginForm />

        <div className='pt-4 text-center'>
          <p className='text-secondary'>
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
