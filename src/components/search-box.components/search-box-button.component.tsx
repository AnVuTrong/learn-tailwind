import React from 'react';
import { ButtonProps } from '../../types/types';

export const SearchBoxButton: React.FC<ButtonProps> = ({ button, onClick }) => {
  return (
    <button 
      className='flex items-center gap-2 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors'
      onClick={onClick}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='size-5 text-[#8222ff]'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d={button.icon}
        />
      </svg>
      <span className='text-sm'>{button.label}</span>
    </button>
  );
}; 