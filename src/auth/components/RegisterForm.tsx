'use client';

import { SubmitHandler, useForm } from 'react-hook-form';

import { register as registerAction } from '@/auth/actions/register';
import { RegisterField } from '@/auth/components/RegisterField';
import { SubmitButton } from '@/auth/components/SubmitButton';

export interface RegisterFormInputs {
  fullname: string;
  email: string;
  password: string;
  confirm_password: string;
}

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setError,
    watch,
  } = useForm<RegisterFormInputs>({
    defaultValues: {
      fullname: '',
      email: '',
      password: '',
      confirm_password: '',
    },
  });

  const password = watch('password');

  const onSubmit: SubmitHandler<RegisterFormInputs> = async (data) => {
    const registerResponse = await registerAction(
      data.email,
      data.password,
      data.fullname,
    );

    if (registerResponse.message === 'email') {
      setError('email', { type: 'manual', message: 'Email already exists' });

      return;
    }

    if (!registerResponse.ok) {
      return;
    }

    reset();
  };

  return (
    <form className='space-y-5' onSubmit={handleSubmit(onSubmit)}>
      <RegisterField
        label='Fullname'
        name='fullname'
        type='text'
        placeholder='Enter your fullname'
        register={register}
        errors={errors.fullname}
        pattern={{
          value: /^[a-zA-Z\s]+$/,
          message: 'Fullname can only contain letters and spaces.',
        }}
        minLength={{
          value: 3,
          message: 'Fullname must be at least 3 characters long.',
        }}
        maxLength={{
          value: 30,
          message: 'Fullname cannot exceed 30 characters.',
        }}
      />

      <RegisterField
        label='Email'
        name='email'
        type='email'
        placeholder='Enter your email address'
        register={register}
        errors={errors.email}
        pattern={{
          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          message: 'Please enter a valid email address.',
        }}
      />

      <RegisterField
        label='Password'
        name='password'
        type='password'
        placeholder='Enter your password'
        register={register}
        errors={errors.password}
        minLength={{
          value: 8,
          message: 'Password must have at least 8 characters.',
        }}
      />

      <RegisterField
        label='Confirm Password'
        name='confirm_password'
        type='password'
        placeholder='Confirm your password'
        register={register}
        errors={errors.confirm_password}
        validate={(value) => value === password || 'Passwords do not match'}
      />

      <SubmitButton label='Sign Up' />
    </form>
  );
};
