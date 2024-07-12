import React from 'react';
import { ThemeContext } from '@/context/ThemeProvider';
import { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MoveRight } from 'lucide-react';
import { Carroucel } from './Carroucel';
import {ProjectLayoutProps} from '@/types/global-types';

export default function ProjectLayout({
  projectId,
  projectDescription,
  projectImage,
  projectName,
  projectTechs,
  projectLink,
  projectLive,
}: ProjectLayoutProps) {
  const { isDark } = useContext(ThemeContext);

  return (
    <div
      className={` ${
        isDark
          ? 'bg-gray-900 text-white hover:shadow-sm hover:bg-gray-800'
          : 'bg-gray-200 text-black hover:shadow-sm hover:bg-slate-50'
      }
    w-full overflow-hidden rounded-3xl shadow-lg transition-all duration-500 ease-in-out text-gray-100  flex lg:flex-row flex-col justify-center items-center hover:scale-[101%] transform hover:shadow-2xl gap-2 h-full lg:w-[100%]
    `}
      key={projectId}
    >
      <section
        className={`
        flex flex-col justify-start lg:justify-center items-start w-full h-full text-black p-8 gap-3 tracking-wider xlp-10
        ${isDark ? 'text-white' : 'text-black'}
      `}
      >
        <h1 className="text-lg font-bold lg:text-xl bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-yellow-600">{projectName}</h1>
        <h2 className="text-[10px] lg:text-sm flex flex-row items-center gap-3 flex-wrap">
          {projectTechs?.map((tech) => (
            <p key={tech}>{tech}</p>
          ))}
          <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
        </h2>
        <p className="text-xs text-start max-w-xl lg:text-base">
          {projectDescription || 'Descrição'}
        </p>
        <div className="py-5 w-full sm:py-1 flex flex-col justify-start items-start sm:items-center">
          <Link
            href={`/projetos/${projectId}`}
            className="flex flex-row justify-between items-center bg-gray-400 hover:bg-gray-600  text-white py-3 px-5 sm:px-4 sm:py-2 transition-all gap-3 hover:gap-5 duration-500 ease-in-out rounded-full"
          >
            <button className="text-xs">Ver mais</button>
            <MoveRight size={18} />
          </Link>
        </div>
      </section>
      <aside className="flex flex-row justify-center items-center w-full sm:w-full max-w-2xl h-full overflow-hidden round-b-2xl lg:rounded-r-none">
        <Carroucel images={projectImage} />
      </aside>
    </div>
  );
}
