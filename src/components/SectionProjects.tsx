import React from "react";
import ProjectLayout from "./ProjectLayout";
import { projetos } from "../utils/data";

export default function SectionProjets() {
  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex flex-col items-center gap-2 text-center">
        <h2 className="text-xl font-bold text-gradient">
          Meus Projetos até aqui...
        </h2>
        <p className="text-sm text-(--color-text-secondary) max-w-md">
          Aqui estão alguns projetos que desenvolvi ou participei.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
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
    </div>
  );
}
