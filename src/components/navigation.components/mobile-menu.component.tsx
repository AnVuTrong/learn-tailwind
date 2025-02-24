import { Link } from 'react-router-dom';
import { NavigationLink } from '../../types/navigation.types';

interface MobileMenuProps {
  isOpen: boolean;
  navigationLinks: NavigationLink[];
  onLinkClick: () => void;
  currentPath: string;
}

export const MobileMenu = ({ isOpen, navigationLinks, onLinkClick, currentPath }: MobileMenuProps) => {
  if (!isOpen) return null;
  
  return (
    <div className='md:hidden pb-3 pt-2'>
      {navigationLinks.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={`${
            currentPath === link.path ? 'bg-[#1a90fd] text-white' : 'text-white hover:bg-[#1a90fd]'
          } block px-3 py-2 rounded-md text-base font-medium`}
          onClick={onLinkClick}>
          {link.label}
        </Link>
      ))}
    </div>
  );
}; 