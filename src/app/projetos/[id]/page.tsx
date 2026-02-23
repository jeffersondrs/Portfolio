import React from 'react';
import { notFound } from 'next/navigation';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { projetos } from '@/utils/data';
import { Carroucel } from '@/components/Carroucel';

interface ProjectPageProps {
  params: {
    id: string;
  };
}

/**
 * Dynamic project detail page.
 */
export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const id = Number(params.id);
  const project = projetos.find((p) => p.projectId === id);

  if (!project) {
    // If the project does not exist, return 404
    return notFound();
  }

  return (
    <Container>
      <Section
        title={project.projectName}
        subtitle={project.projectDescription}
        className="pt-12"
      >
        <div className="mb-6">
          <div className="mb-4">
            <Carroucel images={project.projectImage} />
          </div>
          <h3 className="mb-2 text-base font-semibold">Tecnologias:</h3>
          <ul className="mb-6 flex flex-wrap gap-2 text-sm">
            {project.projectTechs.map((tech) => (
              <li
                key={tech}
                className="rounded bg-gray-200 px-2 py-1 dark:bg-gray-700 dark:text-gray-300"
              >
                {tech}
              </li>
            ))}
          </ul>
          <div className="flex flex-row gap-4">
            {project.projectLink && (
              <a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                Ver Código
              </a>
            )}
            {project.projectLive && (
              <a
                href={project.projectLive}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
              >
                Ver Demo
              </a>
            )}
          </div>
        </div>
      </Section>
    </Container>
  );
}
