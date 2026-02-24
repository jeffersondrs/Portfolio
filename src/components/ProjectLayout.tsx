import Link from "next/link";
import { MoveRight } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Carroucel } from "./Carroucel";
import { ProjectLayoutProps } from "../types/global-types";

export default function ProjectLayout({
  projectId,
  projectDescription,
  projectImage,
  projectName,
  projectTechs,
}: ProjectLayoutProps) {
  return (
    <div className="surface hover-glow w-full overflow-hidden transition-transform duration-(--duration-slow) hover:scale-[101%] flex flex-col md:flex-row h-full">
      <section className="flex flex-col justify-start lg:justify-center items-start w-full h-full px-6 py-5 gap-4 tracking-wider">
        <h2 className="text-lg font-bold text-zinc-50">{projectName}</h2>

        <div className="flex flex-row items-center gap-2 flex-wrap">
          {projectTechs?.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="text-(--color-text-muted) border-(--color-border-subtle) bg-(--color-surface-elevated)"
            >
              {tech}
            </Badge>
          ))}
        </div>

        <p className="text-sm text-(--color-text-secondary) max-w-xl">
          {projectDescription || "Descrição"}
        </p>

        <Button variant="secondary" size="sm" asChild>
          <Link
            href={`/projetos/${projectId}`}
            className="flex items-center gap-3 group"
          >
            <span className="text-xs">Ver mais</span>
            <MoveRight
              size={16}
              className="transition-transform duration-(--duration-base) group-hover:translate-x-1"
            />
          </Link>
        </Button>
      </section>

      <aside className="flex justify-center items-center w-full max-w-2xl h-full overflow-hidden">
        <Carroucel images={projectImage} />
      </aside>
    </div>
  );
}
