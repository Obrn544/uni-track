'use server';

import bcrypt from 'bcrypt';
import prisma from '@/core/config/prisma';

export const register = async (
  email: string,
  password: string,
  fullname: string,
): Promise<{ ok: boolean; message: string }> => {
  try {
    const emailExists = await prisma.user.findUnique({
      where: {
        email,
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
        email,
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
