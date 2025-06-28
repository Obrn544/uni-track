import { Footer } from '@/core/shared/components/Footer';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex min-h-screen flex-col items-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-4'>
      <div className='pointer-events-none absolute inset-0 overflow-hidden'>
        <div className='absolute top-1/4 left-1/4 h-64 w-64 animate-pulse rounded-full bg-blue-200 opacity-30 mix-blend-multiply blur-xl filter'></div>
        <div className='animation-delay-2000 absolute top-3/4 right-1/4 h-64 w-64 animate-pulse rounded-full bg-purple-200 opacity-30 mix-blend-multiply blur-xl filter'></div>
        <div className='animation-delay-4000 absolute bottom-1/4 left-1/3 h-64 w-64 animate-pulse rounded-full bg-pink-200 opacity-30 mix-blend-multiply blur-xl filter'></div>
      </div>

      <section className='relative z-10 flex w-full grow items-center justify-center'>
        {children}
      </section>
      <Footer />
    </div>
  );
}
