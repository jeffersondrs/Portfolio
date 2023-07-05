'use client';

import { usePathname } from 'next/navigation';
import { projetos } from '@/api/data';
import { useState } from 'react';
import { ThemeContext } from '@/context/ThemeProvider';
import { useContext } from 'react';

export default function ProjectPage() {
  const id = usePathname().split('/').pop();
  const { isDark } = useContext(ThemeContext);
  const projectId = parseInt(id as string, 10);
  const project = projetos.find((projeto) => projeto.id === projectId);

  if (!project) {
    return <p>Projeto não encontrado</p>;
  }
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      className={`flex flex-col items-center w-full h-full sm:h-full sm:py-3 justify-center px-5 py-10 gap-5
    ${isDark ? 'bg-gray-950 text-white' : 'bg-gray-100 text-black'} `}
    >
      <h1>{project.title}</h1>
      <p className="max-w-4xl text-center">{project.description}</p>
      <div className="flex flex-row flex-wrap">
        {project.image.map((image) => (
          <img
            src={image}
            alt={project.title}
            className="w-64 h-full"
            key={image}
          />
        ))}
      </div>
    </section>
  );
}
