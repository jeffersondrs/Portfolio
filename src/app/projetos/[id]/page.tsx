'use client';

import { usePathname } from 'next/navigation';
import { projetos } from '@/utils/data';
import { useState } from 'react';
import { ThemeContext } from '@/context/ThemeProvider';
import { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ProjectPage() {
  const id = usePathname().split('/').pop();
  const { isDark } = useContext(ThemeContext);
  const projectId = parseInt(id as string, 10);
  const project = projetos.find((projeto) => projeto.projectId === projectId);

  if (!project) {
    return <p>Projeto não encontrado</p>;
  }
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      className={`flex flex-col items-center w-full h-full py-3 justify-center px-5 gap-3
    ${isDark ? 'bg-gray-950 text-white' : 'bg-gray-100 text-black'} `}
    >
      <h1 className="text-xl tracking-wider font-bold">
        {project.projectName}
      </h1>
      <p className="max-w-xl text-center tracking-widest text-sm">
        {project.projectDescription}
      </p>
      <div className="flex flex-row justify-center items-center gap-5">
        <Link
          className={`text-sm hover:text-gray-500 transition duration-300 ease-in-out bg-gray-200 px-5 py-2 rounded-md
            ${isDark ? 'bg-gray-700 text-white' : 'bg-gray-100 text-black'}
            `}
          href={project.projectLink}
          target="_blank"
        >
          Github
        </Link>
        <Link
          className={`text-sm hover:text-gray-500 transition duration-300 ease-in-out bg-gray-200 px-5 py-2 rounded-md
         ${isDark ? 'bg-gray-700 text-white' : 'bg-gray-100 text-black'}
         `}
          href={project.projectLive}
          target="_blank"
        >
          Live
        </Link>
      </div>
      <div className="flex flex-row flex-wrap gap-5 items-start justify-center relative">
        {project.projectImage.map((image) => (
          <Image
            src={image}
            alt={project.projectName}
            width={300}
            height={400}
            className="h-full hover:scale-125 transition duration-150 ease-in-out shadow-lg border-2 border-gray-200 rounded-md"
            key={image}
          />
        ))}
      </div>
    </section>
  );
}
