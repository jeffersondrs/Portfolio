import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';

const socials = [
  {
    href: 'https://twitter.com/kalliadranoth',
    icon: FaXTwitter,
    label: 'Twitter',
  },
  {
    href: 'https://github.com/jeffersondrs',
    icon: Github,
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/jeffersondrs/',
    icon: Linkedin,
    label: 'LinkedIn',
  },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-(--color-border) bg-(--color-background) flex flex-col items-center gap-4 py-8 px-5">
      <div className="flex flex-row gap-4">
        {socials.map(({ href, icon: Icon, label }) => (
          <Link
            key={label}
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            className="text-(--color-text-secondary) hover:text-zinc-50 transition-colors duration-(--duration-base) p-1.5 rounded-md hover:bg-(--color-surface-elevated)"
          >
            <Icon size={18} />
          </Link>
        ))}
      </div>

      <p className="text-sm text-(--color-text-secondary) tracking-wide">
        Feito com <span className="text-red-400">❤️</span> por{' '}
        <Link
          href="https://x.com/kalliadranoth"
          target="_blank"
          rel="noopener noreferrer"
          className="underline-hover text-zinc-50 hover:text-(--color-text-secondary)"
        >
          Jefferson Santos
        </Link>
      </p>

      <p className="text-xs text-(--color-text-muted)">
        © Copyright {new Date().getFullYear()} — Todos os direitos reservados
      </p>
    </footer>
  );
}
