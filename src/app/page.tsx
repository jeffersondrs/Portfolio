'use client';

import { ThemeContext } from '@/context/ThemeProvider';
import { useContext } from 'react';
import Hello from '@/components/Hello';
import { ProjectLayout, SectionMyJourney } from '@/components/index';
import { projetos } from '@/api/data';

export default function Home() {
  const { isDark } = useContext(ThemeContext);

  return (
    <main
      className={`
    ${isDark ? 'bg-gray-950 text-white' : 'bg-gray-100 text-black'}
    flex flex-col items-center max-w-[100rem] h-full justify-center px-5 py-10 w-full
    `}
    >
      <Hello />
      
      {/* <div className="grid grid-cols-2 py-10 gap-10">
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
      </div> */}
    </main>
  );
}
