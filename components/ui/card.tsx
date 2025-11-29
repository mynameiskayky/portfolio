import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

/**
 * Card component with optional hover effect
 */
export default function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-3xl bg-white border border-border p-6',
        hover && 'hover-lift cursor-pointer',
        className
      )}
    >
      {children}
    </div>
  );
}
