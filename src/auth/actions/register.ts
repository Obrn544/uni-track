'use server';

import bcrypt from 'bcrypt';
import prisma from '@/core/config/prisma';
import { signIn } from '@/auth.config';

export const register = async (
  email: string,
  password: string,
  fullname: string,
): Promise<{ ok: boolean; message: string }> => {
  try {
    const emailExists = await prisma.user.findUnique({
      where: {
        email: email.toLowerCase(),
      },
    });

    if (emailExists) {
      return {
        ok: false,
        message: 'email',
      };
    }

    await prisma.user.create({
      data: {
        email: email.toLowerCase(),
        password: bcrypt.hashSync(password, 10),
        fullname,
      },
    });

    return {
      ok: true,
      message: 'User created successfully',
    };
  } catch (error) {
    console.log('[REGISTER ERROR]', error);

    return {
      ok: false,
      message: 'Something went wrong',
    };
  }
};

export const login = async (email: string, password: string) => {
  try {
    await signIn('credentials', {
      email: email.toLowerCase(),
      password,
    });

    return {
      ok: true,
      message: 'User logged in successfully',
    };
  } catch (error) {
    console.log('[LOGIN ERROR]', error);

    return {
      ok: false,
      message: 'Something went wrong',
    };
  }
};
