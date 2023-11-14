'use client';

import { usePathname } from 'next/navigation';
import { projetos } from '@/api/data';
import { useState } from 'react';
import { ThemeContext } from '@/context/ThemeProvider';
import { useContext } from 'react';
import Link from 'next/link';

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
      className={`flex flex-col items-center w-full h-full py-3 justify-center px-5 md:py-12 gap-10
    ${isDark ? 'bg-gray-950 text-white' : 'bg-gray-100 text-black'} `}
    >
      <h1 className="text-2xl tracking-wider font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
        {project.title}
      </h1>
      <p className="max-w-xl text-center tracking-widest ">
        {project.description}
      </p>
      <div className="flex flex-row justify-center items-center gap-5">
        <Link
          className={`text-xl hover:text-gray-500 transition duration-300 ease-in-out bg-gray-200 px-5 py-2 rounded-md bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500
            ${isDark ? 'bg-gray-700 text-white' : 'bg-gray-100 text-black'}
            `}
          href={project.link}
          target="_blank"
        >
          Github
        </Link>
        <Link
          className={`text-xl hover:text-gray-500 transition duration-300 ease-in-out bg-gray-200 px-5 py-2 rounded-md bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500
         ${isDark ? 'bg-gray-700 text-white' : 'bg-gray-100 text-black'}
         `}
          href={project.live}
          target="_blank"
        >
          Live
        </Link>
      </div>
      <div className="flex flex-row flex-wrap gap-5 items-start justify-center relative">
        {project.image.map((image) => (
          <img
            src={image}
            alt={project.title}
            className="w-64 h-full hover:scale-125 transition duration-150 ease-in-out"
            key={image}
          />
        ))}
      </div>
    </section>
  );
}
