export interface NavigationLink {
  path: string;
  label: string;
} 

export interface MoreDropdownProps {
  navigationLinks: NavigationLink[];
}