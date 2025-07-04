'use server';

import { signIn } from '@/auth.config';
import { AuthError } from 'next-auth';

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', {
      redirect: false,
      ...Object.fromEntries(formData),
    });

    return 'Success';
  } catch (error) {
    if ((error as AuthError).type === 'CredentialsSignin') {
      return 'CredentialsSignin';
    }
    return 'UnknownError';
  }
}
