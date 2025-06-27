import { Icon } from '@iconify/react';

import { Feature } from './Feature';

const Features = [
  {
    icon: 'lets-icons:book-open-duotone-line',
    title: 'Course Management',
    description:
      'Organize all your courses, track progress, and never miss an important deadline or assignment.',
    background: 'from-blue-500 to-cyan-500',
  },
  {
    icon: 'mynaui:check-square-one',
    title: 'Task & Assignment Tracking',
    description:
      'Create, organize, and track all your assignments with due dates, priorities, and progress indicators.',
    background: 'from-green-500 to-emerald-500',
  },
  {
    icon: 'lucide:users',
    title: 'Study Groups',
    description:
      'Form study groups, collaborate on projects, and communicate with classmates in real-time.',
    background: 'from-purple-500 to-pink-500',
  },
  {
    icon: 'tabler:calendar',
    title: 'Smart Calendar',
    description:
      'Integrated calendar with deadline reminders, class schedules, and important academic dates.',
    background: 'from-orange-500 to-red-500',
  },
  {
    icon: 'gg:trending',
    title: 'Progress Analytics',
    description:
      'Track your academic performance with detailed analytics and insights to improve your study habits.',
    background: 'from-indigo-500 to-purple-500',
  },
];

export const FeaturesSection = () => {
  return (
    <>
      <section className='bg-white/50 py-20 backdrop-blur-sm'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='mb-16 space-y-4 text-center'>
            <h2 className='text-foreground text-3xl font-bold lg:text-4xl'>
              Everything you need to succeed
            </h2>
            <p className='text-secondary mx-auto max-w-2xl text-xl'>
              Powerful features designed specifically for university students to
              stay organized and achieve their academic goals.
            </p>
          </div>

          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {Features.map((feature, index) => (
              <Feature
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                background={feature.background}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
