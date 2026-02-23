import React from 'react';

interface SectionProps {
  /** Section title */
  title?: string;
  /** Section subtitle or description */
  subtitle?: string;
  /** Children elements to render inside the section */
  children: React.ReactNode;
  /** Extra Tailwind classes for custom styling */
  className?: string;
}

/**
 * A semantic section wrapper that provides consistent spacing and optional headings.
 * Use this component to break your pages into digestible chunks and improve readability.
 */
export default function Section({
  title,
  subtitle,
  children,
  className = '',
}: SectionProps) {
  return (
    <section className={`py-8 sm:py-12 ${className}`}>
      <div className="mb-6 text-center">
        {title && <h2 className="text-2xl font-bold">{title}</h2>}
        {subtitle && (
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{subtitle}</p>
        )}
      </div>
      {children}
    </section>
  );
}
