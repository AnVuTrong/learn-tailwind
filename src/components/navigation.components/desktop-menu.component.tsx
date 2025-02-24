import { Link, useLocation } from 'react-router-dom';
import { NavigationLink } from '../../types/navigation.types';
import { MoreDropdown } from './more-dropdown.component';

interface DesktopMenuProps {
  navigationLinks: NavigationLink[];
}

export const DesktopMenu = ({ navigationLinks }: DesktopMenuProps) => {
  const location = useLocation();
  
  return (
    <div className='hidden md:block'>
      <div className='ml-10 flex items-center space-x-4'>
        {navigationLinks.slice(0, 5).map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`${
              location.pathname === link.path ? 'bg-[#1a90fd] text-white' : 'text-white hover:bg-[#1a90fd] hover:text-white'
            } px-3 py-2 rounded-md text-sm font-medium transition-colors`}>
            {link.label}
          </Link>
        ))}
        <MoreDropdown navigationLinks={navigationLinks.slice(5)} />
      </div>
    </div>
  );
}; 