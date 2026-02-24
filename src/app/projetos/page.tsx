import React from 'react';
import Container from '../../components/ui/Container';
import Section from '../../components/ui/Section';
import Card from '../../components/ui/Card';
import { projetos } from '../../utils/data';

/**
 * Projects listing page. Displays all projects defined in utils/data.ts.
 */
export default function ProjectsPage() {
  return (
    <Container>
      <Section title="Projetos" subtitle="Alguns dos meus projetos favoritos">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projetos.map((proj) => (
            <Card
              key={proj.projectId}
              id={proj.projectId}
              title={proj.projectName}
              description={proj.projectDescription}
              techs={proj.projectTechs}
              image={proj.projectImage[0]}
              link={proj.projectLink}
              live={proj.projectLive}
            />
          ))}
        </div>
      </Section>
    </Container>
  );
}
