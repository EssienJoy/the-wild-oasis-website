<<<<<<< HEAD
"use client";

export default function Error({ error, reset }) {
  return (
    <main className="flex justify-center items-center flex-col gap-6">
      <h1 className="text-3xl font-semibold">Something went wrong!</h1>
      <p className="text-lg">{error.message}</p>

      <button
        className="inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg"
        onClick={reset}
      >
=======
'use client';

export default function Error({ error, reset }) {
  return (
    <main className='flex justify-center items-center flex-col gap-6'>
      <h1 className='text-3xl font-semibold'>Something went wrong!</h1>
      <p className='text-lg'>{error.message}</p>

      <button className='inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg' onClick={reset}>
>>>>>>> 7c8bc53f0aad881f88aefd4e7fb4181c95503bb5
        Try again
      </button>
    </main>
  );
}
