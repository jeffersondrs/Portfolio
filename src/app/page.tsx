'use client';

import { ThemeContext } from '@/context/ThemeProvider';
import { useContext } from 'react';
import Hello from '@/components/Hello';
import ProjectLayout from '@/components/ProjectLayout';
import { projetos } from '@/api/data';

export default function Home() {
  const { isDark } = useContext(ThemeContext);

  return (
    <main
      className={`
    ${isDark ? 'bg-gray-950 text-white' : 'bg-gray-100 text-black'}
    flex flex-col items-center w-full h-full sm:h-full sm:py-3 justify-center px-5 py-10 sm:px-3 gap-5
    `}
    >
      <div className="flex flex-col justify-center items-center gap-20 sm:gap-5 py-5">
        <Hello />
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 py-10 gap-10">
        {projetos.map((projeto) => (
          <ProjectLayout
            key={projeto.projectId}
            projectId={projeto.projectId}
            projectName={projeto.projectName}
            projectDescription={projeto.projectDescription}
            projectImage={projeto.projectImage}
            projectTechs={projeto.projectTechs}
            projectLink={projeto.projectLink}
            projectLive={projeto.projectLive}
          />
        ))}
      </div>
    </main>
  );
}
