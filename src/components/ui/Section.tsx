import React from "react";

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({
  title,
  subtitle,
  children,
  className = "",
}: SectionProps) {
  return (
    <section className={`w-full py-8 sm:py-12 ${className}`}>
      {(title || subtitle) && (
        <div className="mb-8 flex flex-col items-center text-center gap-2">
          {title && (
            <h2 className="text-2xl font-bold text-gradient">{title}</h2>
          )}
          {subtitle && (
            <p className="text-sm text-(--color-text-muted) max-w-lg">
              {subtitle}
            </p>
          )}
        </div>
      )}
      <div className="w-full">{children}</div>
    </section>
  );
}
