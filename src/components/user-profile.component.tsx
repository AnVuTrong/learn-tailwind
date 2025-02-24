import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export const UserProfile = () => {
  return (
    <div className='flex min-h-screen w-full items-center justify-center bg-[#E6EFFA] py-20'>
      <div className='flex w-[36rem] rounded-lg bg-white p-12 gap-x-4'>
        <img 
          src='https://randomuser.me/api/portraits/men/67.jpg' 
          alt='Profile picture' 
          className='w-32 rounded-full border-[11px] border-[#E6EFFA] self-start' 
        />
        <div className='space-y-7'>
          <h1 className='text-3xl font-bold text-[#1C2B62]'>Ân</h1>
          <h2 className='mt-1 font-semibold'>Junior Frontend Developer</h2>
          <div className='space-y-4'>
            <p>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='mr-1 inline h-6 w-6'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z'
                />
              </svg>
              2.5 Rating
            </p>
            <p>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='mr-1 inline size-6 h-6 w-6'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z'
                />
              </svg>
              100 Reviews
            </p>
            <p>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='mr-1 inline h-6 w-6'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z'
                />
              </svg>
              3 projects
            </p>
            <p>
              Hi! I'm Ân, a passionate junior frontend developer. My journey in web development started with a curiosity about how websites work, and it
              has evolved into a pursuit of mastering modern frontend technologies.
            </p>
            <button className='rounded-lg border-2 border-[#C4CADF] p-2'>Show more</button>
          </div>
        </div>
      </div>
    </div>
  );
};
