export interface SearchBoxButton {
  id: string;
  label: string;
  icon: string;
}

export interface ButtonProps {
  button: SearchBoxButton;
  onClick?: () => void;
} 