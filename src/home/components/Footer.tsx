import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className='bg-blue-50 py-4 text-center text-sm'>
      <p>
        Created with 💜 by{' '}
        <Link
          href='https://github.com/Obrn544'
          className='font-medium text-blue-600 transition-colors hover:underline'
          rel='noopener noreferrer'
          target='_blank'
        >
          Obrn544
        </Link>
      </p>
    </footer>
  );
};
