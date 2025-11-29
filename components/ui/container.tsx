import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'main';
}

/**
 * Container component for consistent max-width and padding
 */
export default function Container({
  children,
  className,
  as: Component = 'div'
}: ContainerProps) {
  return (
    <Component className={cn('container-custom', className)}>
      {children}
    </Component>
  );
}
