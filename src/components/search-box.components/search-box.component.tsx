import React from 'react';
import { SearchBoxButtons } from './search-box-buttons.component';

export const SearchBox = () => {
  return (
    <div className='flex min-h-screen w-full items-center justify-center bg-[#E6EFFA] py-20'>
      <div className='flex w-[36rem] rounded-lg bg-white p-12 flex-col'>
        <div className='flex w-full overflow-hidden rounded-lg border-2 border-[#8222ff]'>
          <div className='relative flex-1'>
            <input type='text' className='w-full p-2 pl-10 focus:outline-none' placeholder='Search for a meaning of life...' />
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z'
              />
              <path strokeLinecap='round' strokeLinejoin='round' d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z' />
            </svg>
          </div>
          <button className='bg-[#8222ff] px-5 text-white font-bold flex items-center gap-2 transition-colors hover:bg-[#6a1bcc]'>
            <span>Search</span>
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-5'>
              <path strokeLinecap='round' strokeLinejoin='round' d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z' />
            </svg>
          </button>
        </div>

        <SearchBoxButtons />
      </div>
    </div>
  );
};
