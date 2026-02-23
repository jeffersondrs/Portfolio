import React from 'react';
import Link from 'next/link';

/**
 * A simple top navigation bar with links to the main pages.
 * Extend this component with your own styling or additional links.
 */
export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/80 backdrop-blur dark:border-gray-700 dark:bg-gray-950/80">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-bold">
          Jefferson
        </Link>
        <ul className="flex space-x-4 text-sm font-medium">
          <li>
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">
              Início
            </Link>
          </li>
          <li>
            <Link href="/projetos" className="hover:text-blue-600 dark:hover:text-blue-400">
              Projetos
            </Link>
          </li>
          <li>
            <Link href="/sobre" className="hover:text-blue-600 dark:hover:text-blue-400">
              Sobre
            </Link>
          </li>
          <li>
            <Link href="/contato" className="hover:text-blue-600 dark:hover:text-blue-400">
              Contato
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
