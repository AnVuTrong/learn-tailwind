import { Link } from 'react-router-dom';
import { NavigationLink } from '../../types/navigation.types';
import { DropdownIcon } from './dropdown-icon.component';

interface MoreDropdownProps {
  navigationLinks: NavigationLink[];
}

export const MoreDropdown = ({ navigationLinks }: MoreDropdownProps) => (
  <div className='relative group'>
    <button className='text-white hover:bg-[#1a90fd] px-3 py-2 rounded-md text-sm font-medium'>
      More
      <DropdownIcon />
    </button>
    <div className='absolute right-0 w-48 mt-2 py-2 bg-white rounded-md shadow-xl hidden group-hover:block'>
      {navigationLinks.map((link) => (
        <Link key={link.path} to={link.path} className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
          {link.label}
        </Link>
      ))}
    </div>
  </div>
); 