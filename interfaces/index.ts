export interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}
export interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
}