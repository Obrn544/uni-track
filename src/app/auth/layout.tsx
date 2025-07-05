import { auth } from '@/auth.config';
import { redirect } from 'next/navigation';

import { Footer } from '@/core/shared/components/Footer';

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (session?.user) {
    redirect('/dashboard');
  }

  return (
    <div className='flex min-h-screen flex-col items-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 px-4 pt-4'>
      <div className='pointer-events-none absolute inset-0 overflow-hidden'>
        <div className='absolute top-1/4 left-1/4 h-64 w-64 animate-pulse rounded-full bg-blue-200 opacity-30 mix-blend-multiply blur-xl filter'></div>
        <div className='animation-delay-2000 absolute top-3/4 right-1/4 h-64 w-64 animate-pulse rounded-full bg-purple-200 opacity-30 mix-blend-multiply blur-xl filter'></div>
        <div className='animation-delay-4000 absolute bottom-1/4 left-1/3 h-64 w-64 animate-pulse rounded-full bg-pink-200 opacity-30 mix-blend-multiply blur-xl filter'></div>
      </div>

      <div className='relative z-10 flex w-full grow items-center justify-center'>
        <section className='w-full max-w-md overflow-hidden rounded-2xl border-0 bg-white/80 shadow-2xl backdrop-blur-md'>
          {children}
        </section>
      </div>
      <Footer />
    </div>
  );
}
