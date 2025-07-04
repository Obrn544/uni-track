import { z } from 'zod';
import bcrypt from 'bcrypt';
import NextAuth, { type NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

import prisma from '@/core/config/prisma';

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: '/auth/login',
    newUser: '/auth/register',
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (!parsedCredentials.success) return null;

        const { email, password } = parsedCredentials.data;

        const user = await prisma.user.findUnique({
          where: { email: email.toLowerCase() },
        });

        if (!user) return null;

        if (!bcrypt.compareSync(password, user.password)) return null;

        const { password: _, ...rest } = user;

        return rest;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.data = user;
      }

      return token;
    },
    async session({ session, token }) {
      session.user = token.data as any;

      return session;
    },
  },
};

export const { signIn, signOut, auth } = NextAuth(authConfig);
