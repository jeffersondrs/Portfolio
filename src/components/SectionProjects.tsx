import React from 'react';
import ProjectLayout from './ProjectLayout';
import { projetos } from '@/utils/data';

export default function SectionProjets() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="text-xl font-bold">Meus Projetos</h1>
        <p className="text-xs text-center max-w-md">
          Aqui estão alguns projetos que desenvolvi ou participei.
        </p>
      </div>
      <div className="grid grid-cols-2 py-10 gap-10">
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
    </>
  );
}
