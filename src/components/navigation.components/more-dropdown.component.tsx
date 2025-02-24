import { Link } from 'react-router-dom';
import { NavigationLink } from '../../types/navigation.types';
import { DropdownIcon } from './dropdown-icon.component';
import { MoreDropdownProps } from '../../types/navigation.types';


export const MoreDropdown = ({ navigationLinks }: MoreDropdownProps) => (
  <div className='relative group'>
    <button className='text-white hover:bg-[#1a90fd] px-3 py-2 rounded-md text-sm font-medium'>
      More
      <DropdownIcon />
    </button>
    <div className='absolute right-0 w-48 pt-2 hidden group-hover:block hover:block'>
      <div className='bg-white rounded-md shadow-xl py-2'>
        {navigationLinks.map((link) => (
          <Link 
            key={link.path} 
            to={link.path} 
            className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  </div>
);