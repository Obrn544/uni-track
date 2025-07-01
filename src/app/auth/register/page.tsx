import Link from 'next/link';

import { AuthHeader } from '@/auth/components/AuthHeader';
import { RegisterForm } from '@/auth/components/RegisterForm';

export default function RegisterPage() {
  return (
    <>
      <AuthHeader
        title='Join your team'
        description='Create your account and start collaborating today'
      />

      <main className='space-y-6 px-8 pb-8'>
        <RegisterForm />

        <div className='pt-4 text-center'>
          <p className='text-secondary'>
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
