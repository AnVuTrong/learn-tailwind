import { Fragment, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Logo } from '../components/navigation.components/logo-navi.component';
import { DesktopMenu } from '../components/navigation.components/desktop-menu.component';
import { MobileMenuButton } from '../components/navigation.components/mobile-menu-button.component';
import { MobileMenu } from '../components/navigation.components/mobile-menu.component';
import { navigationLinks } from '../constants/navigation.constants';

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <Fragment>
      <nav className='bg-gradient-to-r from-[#2fb2fd] to-[#5dffae] shadow-lg'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <Logo />
            <DesktopMenu navigationLinks={navigationLinks} />
            <MobileMenuButton 
              isOpen={isMenuOpen} 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
            />
          </div>
          <MobileMenu 
            isOpen={isMenuOpen}
            navigationLinks={navigationLinks}
            onLinkClick={() => setIsMenuOpen(false)}
            currentPath={location.pathname}
          />
        </div>
      </nav>
      <main className='p-4'>
        <Outlet />
      </main>
    </Fragment>
  );
};
