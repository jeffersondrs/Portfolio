import React from "react";
import { notFound } from "next/navigation";
import Container from "../../../components/ui/Container";
import { projetos } from "../../../utils/data";
import { Carroucel } from "../../../components/Carroucel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Link from "next/link";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projetos.find((p) => p.projectId === Number(id));

  if (!project) return notFound();

  return (
    <Container>
      <div className="flex flex-col gap-8 py-10 fade-in">
        <Button
          variant="ghost"
          size="sm"
          asChild
          className="w-fit text-(--color-text-muted) hover:text-zinc-50 -ml-2"
        >
          <Link href="/projetos">
            <ArrowLeft size={14} className="mr-1" />
            Voltar aos projetos
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="w-full rounded-lg overflow-hidden">
            <Carroucel images={project.projectImage} />
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl sm:text-3xl font-bold text-gradient">
                {project.projectName}
              </h1>
              <p className="text-sm sm:text-base text-(--color-text-secondary) leading-relaxed">
                {project.projectDescription}
              </p>
            </div>

            <div className="divider" />

            <div className="flex flex-col gap-3">
              <h3 className="text-xs font-semibold text-(--color-text-muted) uppercase tracking-widest">
                Tecnologias
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.projectTechs.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="text-(--color-text-muted) border-(--color-border-subtle) bg-(--color-surface-elevated)"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="divider" />

            <div className="flex flex-col sm:flex-row gap-3">
              {project.projectLink && (
                <Button
                  variant="secondary"
                  size="sm"
                  asChild
                  className="w-full sm:w-auto"
                >
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={14} className="mr-2" />
                    Ver Código
                  </a>
                </Button>
              )}
              {project.projectLive && (
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="w-full sm:w-auto"
                >
                  <a
                    href={project.projectLive}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={14} className="mr-2" />
                    Ver Demo
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
