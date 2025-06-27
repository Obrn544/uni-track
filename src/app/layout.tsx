import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'UniTrack',
  description:
    'UniTrack helps students organize courses, manage assignments, collaborate on projects, and track academic progress—all in one beautiful, intuitive platform.',
  keywords: ['UniTrack', 'Student Organization', 'University Management'],
  authors: [{ name: 'UniTrack' }],
  openGraph: {
    title: 'UniTrack',
    description:
      'UniTrack helps students organize courses, manage assignments, collaborate on projects, and track academic progress—all in one beautiful, intuitive platform.',
    type: 'website',
    locale: 'en_US',
    siteName: 'UniTrack',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'UniTrack',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
