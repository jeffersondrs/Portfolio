import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center gap-6 py-20 w-full fade-in">
      <Image
        src="/perfil.png"
        alt="Jefferson Santos"
        width={200}
        height={200}
        className="rounded-full shadow-lg ring-2 ring-zinc-800"
      />

      <h1 className="text-4xl font-bold text-gradient">Jefferson Santos</h1>

      <p className="max-w-md text-lg text-zinc-400">
        Desenvolvedor Full Stack apaixonado por construir experiências web e
        mobile.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/projetos"
          className="surface hover-glow rounded-lg px-6 py-3 text-sm font-medium text-zinc-50 shadow-md transition-colors"
        >
          Ver Projetos
        </Link>
        <Link
          href="/contato"
          className="rounded-lg border border-zinc-700 px-6 py-3 text-sm font-medium text-zinc-400 shadow-md hover-glow transition-colors"
        >
          Contato
        </Link>
      </div>
    </section>
  );
}
