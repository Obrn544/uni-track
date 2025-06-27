import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className='bg-blue-50 py-4 text-center text-sm'>
      <p>
        Created with 💜 by{' '}
        <Link
          href='https://github.com/Obrn544'
          className='bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text font-medium text-transparent transition-colors hover:from-blue-600 hover:to-purple-600'
          rel='noopener noreferrer'
          target='_blank'
        >
          Obrn544
        </Link>
      </p>
    </footer>
  );
};
