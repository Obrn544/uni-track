import prisma from '@/core/config/prisma';
import { NextResponse } from 'next/server';
import { initialData } from '@/seed/seed';

export async function POST() {
  try {
    await prisma.user.deleteMany();

    for (const user of initialData.users) {
      await prisma.user.create({
        data: {
          email: user.email,
          fullname: user.fullname,
          password: user.password,
        },
      });
    }

    return NextResponse.json(
      { message: 'Seed executed successfully' },
      { status: 200 },
    );
  } catch (error) {
    console.error('[SEED_ERROR]', error);
    return NextResponse.json(
      { message: 'Failed to execute seed' },
      { status: 500 },
    );
  }
}
