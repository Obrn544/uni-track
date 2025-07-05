import NextAuth, { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      email: string;
      fullname: string;
      image?: string | null;
    } & DefaultSession['user'];
  }
}
