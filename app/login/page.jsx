'use client';
import { signIn } from 'next-auth/react';

function Page() {
  const handleSubmit = async e => {
    e.preventDefault();

    await signIn('credentials', {
      email: e.target.email.value,
      password: e.target.password.value,
      // redirect: false,
      redirectTo: '/dashboard',
    });
  };

  return (
    <main className='h-screen flex flex-col items-center justify-center gap-4'>
      <h1 className='text-4xl font-bold'>Login</h1>
      <form
        className='flex flex-col gap-4 border rounded-md p-5 text-lg'
        onSubmit={handleSubmit}
      >
        <input
          type='text'
          name='email'
          placeholder='Email'
          className='border rounded-md px-3 py-2'
        />
        <input
          type='text'
          name='password'
          placeholder='Password'
          className='border rounded-md px-3 py-2'
        />
        <button
          type='submit'
          className='bg-blue-400 self-center px-3 py-2 rounded-md text-white'
        >
          Login
        </button>
      </form>
    </main>
  );
}

export default Page;
