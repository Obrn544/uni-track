import { Feature } from './Feature';

const Features = [
  {
    icon: 'mynaui:check-square-one',
    title: 'Task Management',
    description:
      'Create, assign, and track tasks with your team. Set priorities, deadlines, and monitor progress in real-time.',
    background: 'from-blue-500 to-cyan-500',
  },
  {
    icon: 'tabler:users',
    title: 'Team Collaboration',
    description:
      'Form groups, collaborate on projects, and communicate seamlessly with built-in chat and file sharing.',
    background: 'from-green-500 to-emerald-500',
  },
  {
    icon: 'tabler:calendar',
    title: 'Shared Calendars',
    description:
      'Sync schedules with your team, plan meetings, and never miss important deadlines with smart reminders.',
    background: 'from-purple-500 to-pink-500',
  },
  {
    icon: 'octicon:goal-24',
    title: 'Goal Tracking',
    description:
      'Set team goals, track milestones, and celebrate achievements together with visual progress indicators.',
    background: 'from-orange-500 to-red-500',
  },
];

export const FeaturesSection = () => {
  return (
    <>
      <section className='bg-white/50 py-20 backdrop-blur-sm'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='mb-16 space-y-4 text-center'>
            <h2 className='text-foreground text-3xl font-bold lg:text-4xl'>
              Organize tasks and groups in sync
            </h2>
            <p className='text-secondary mx-auto max-w-2xl text-xl'>
              Powerful features designed for teams and individuals who want to
              stay organized and achieve their goals together.
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
