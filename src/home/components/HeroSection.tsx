import Link from 'next/link';
import { Icon } from '@iconify/react';

export const HeroSection = () => {
  return (
    <>
      <section className='relative overflow-hidden py-20 lg:py-32'>
        <div className='pointer-events-none absolute inset-0 overflow-hidden'>
          <div className='absolute top-1/4 left-1/4 h-96 w-96 animate-pulse rounded-full bg-blue-200 opacity-30 mix-blend-multiply blur-xl filter'></div>
          <div className='absolute top-3/4 right-1/4 h-96 w-96 animate-pulse rounded-full bg-purple-200 opacity-30 mix-blend-multiply blur-xl filter'></div>
        </div>

        <div className='relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='space-y-8 text-center'>
            <button className='w-fit rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-200'>
              🎓 The future of student organization
            </button>

            <h1 className='text-foreground text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl'>
              Stay on top of your{' '}
              <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                university life
              </span>
            </h1>

            <p className='text-secondary mx-auto max-w-3xl text-xl leading-relaxed'>
              UniTrack helps students organize courses, manage assignments,
              collaborate on projects, and track academic progress—all in one
              beautiful, intuitive platform.
            </p>

            <div className='flex flex-col items-center justify-center gap-4 sm:flex-row'>
              <Link href='/login'>
                <button className='flex transform cursor-pointer items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:from-blue-600 hover:to-purple-700 hover:shadow-xl'>
                  <Icon
                    icon='material-symbols:arrow-right-alt-rounded'
                    width={20}
                    height={20}
                  />
                  Get Started Free
                </button>
              </Link>
              <button className='flex cursor-pointer items-center gap-2 rounded-xl border-gray-200 bg-white/70 px-8 py-3 text-lg font-semibold backdrop-blur-sm hover:bg-gray-50'>
                <Icon icon='hugeicons:play' width={20} height={20} />
                Watch Demo
              </button>
            </div>

            <div className='text-secondary flex items-center justify-center space-x-8 pt-8 text-sm'>
              <div className='flex items-center space-x-2'>
                <div className='flex -space-x-2'>
                  <div className='h-8 w-8 rounded-full border-2 border-white bg-gradient-to-r from-blue-400 to-purple-500'></div>
                  <div className='h-8 w-8 rounded-full border-2 border-white bg-gradient-to-r from-green-400 to-blue-500'></div>
                  <div className='h-8 w-8 rounded-full border-2 border-white bg-gradient-to-r from-purple-400 to-pink-500'></div>
                </div>
                <span>10,000+ students</span>
              </div>
              <div className='flex items-center space-x-1'>
                <Icon icon='fluent-emoji-flat:star' width={16} height={16} />
                <span>4.9/5 rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
