import React from 'react';
import { ButtonProps } from '../../types/types';

export const SearchBoxButton: React.FC<ButtonProps> = ({ button, onClick }) => {
  return (
    <button 
      className='flex items-center gap-2 p-3 rounded-lg border border-[#673d80] hover:opacity-80 transition-colors'
      onClick={onClick}
      style={{ 
        backgroundColor: button.bgColor,
      }}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='size-5'
        viewBox='0 0 24 24'
        fill='none'
        stroke='#673d80'
        strokeWidth='2'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d={button.icon}
        />
      </svg>
      <span className='text-sm text-[#673d80]'>{button.label}</span>
    </button>
  );
}; 