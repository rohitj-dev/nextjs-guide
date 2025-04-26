'use client';

import { useEffect } from 'react';

function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className='container mx-auto p-4 text-center h-screen'>
      <h1 className='text-2xl font-semibold'>Something went wrong!</h1>
      <div className='container mx-auto p-4 text-center flex flex-col items-center justify-center mt-20'>
        <table>
          <thead>
            <tr>
              <th className='px-4 py-2'>Property</th>
              <th className='px-4 py-2'>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border px-4 py-2'>Error Name</td>
              <td className='border px-4 py-2'>{error.name}</td>
            </tr>
            <tr>
              <td className='border px-4 py-2'>Error Message</td>
              <td className='border px-4 py-2'>{error.message}</td>
            </tr>
            <tr>
              <td className='border px-4 py-2'>Error Stack</td>
              <td className='border px-4 py-2'>{error.stack}</td>
            </tr>
            <tr>
              <td className='border px-4 py-2'>Error Digest</td>
              <td className='border px-4 py-2'>{error.digest}</td>
            </tr>
          </tbody>
        </table>
        <p className='text-sm text-gray-500 mt-20'>Please try to refresh the page.</p>

        <button
          className='mt-4 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300'
          onClick={() => reset()}
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export default Error;
