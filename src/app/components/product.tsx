import Image from 'next/image';

import { getOriginalPrice } from '../lib/utils';
import type { Product as ProductProps } from '../types';

export const Product: React.FC<ProductProps> = ({ id, title, thumbnail, price, discountPercentage, rating }) => {
  return (
    <div className='relative flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md text-[#121212]'>
      <a
        className='relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl'
        href={`/products/${id}`}
        target='_blank'
        rel='noopener noreferrer'
      >
        <Image className='object-contain' src={thumbnail} alt={`${title}'s image`} fill />
        <span className='absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-bold p-0.5 text-white'>
          {discountPercentage}% OFF
        </span>
        <span className='absolute inline-flex justify-center p-0.5 items-center top-0 right-0 m-2 rounded-full px-2 text-center text-sm font-bold bg-yellow-400'>
          {rating.toFixed(1)} <Stars rating={1} showRest={false} />
        </span>
      </a>
      <div className='mt-4 px-5 pb-5'>
        <a href={`/products/${id}`} target='_blank' rel='noopener noreferrer'>
          <h5 className='text-xl tracking-tight text-[#121212]'>{title}</h5>
        </a>
        <div className='mt-2 mb-5 flex items-center justify-between'>
          <p>
            <span className='text-3xl font-bold text-[#121212]'>${price}</span>
            <span className='text-sm text-[#121212] line-through'>${getOriginalPrice(price, discountPercentage)}</span>
          </p>
        </div>
        <a
          href={`/products/${id}`}
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center justify-center rounded-md bg-[#121212] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#121212]/90 focus:outline-none focus:ring-4 focus:ring-blue-300'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='mr-2 h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            stroke-width='2'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
            />
          </svg>
          Add to cart
        </a>
      </div>
    </div>
  );
};

const Stars = ({ rating, showRest = true }: { rating: number; showRest?: boolean }) => {
  return (
    <>
      {Array.from({ length: rating }, (_, index) => (
        <svg
          key={index}
          aria-hidden='true'
          className='size-3.5 text-[#121212]'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
        </svg>
      ))}

      {showRest &&
        Array.from({ length: 5 - Math.floor(rating) }, (_, index) => (
          <svg
            key={index}
            aria-hidden='true'
            className='h-5 w-5 text-gray-300'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
          </svg>
        ))}
    </>
  );
};
