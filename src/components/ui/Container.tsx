import React from 'react';

interface ContainerProps {
  /** Children elements to render inside the container. */
  children: React.ReactNode;
  /** Extra Tailwind classes for custom styling. */
  className?: string;
}

/**
 * A responsive wrapper that constrains your content to the center of the page and adds horizontal padding.
 * Use this component to avoid repeating margin and padding utilities throughout your pages.
 */
export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
