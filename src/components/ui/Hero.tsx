import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

/**
 * Hero section for the homepage. Presents your name, a short tagline, and calls to action.
 */
export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center gap-6 py-20">
      <Image
        src="/mepng.png"
        alt="Jefferson Santos"
        width={200}
        height={200}
        className="rounded-full shadow-lg"
      />
      <h1 className="text-4xl font-bold">Jefferson Santos</h1>
      <p className="max-w-md text-lg text-gray-600 dark:text-gray-400">
        Desenvolvedor Full Stack apaixonado por construir experiências web e mobile.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/projetos"
            className="rounded bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-md transition-colors hover:bg-blue-700"
          >
            Ver Projetos
          </Link>
          <Link
            href="/contato"
            className="rounded border border-blue-600 px-6 py-3 text-sm font-medium text-blue-600 shadow-md transition-colors hover:bg-blue-50 dark:hover:bg-gray-800"
          >
            Contato
          </Link>
      </div>
    </section>
  );
}
