import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Badge } from './badge';
import { Button } from './button';

export interface CardProps {
  id: number;
  title: string;
  description: string;
  techs: string[];
  image: string;
  link: string;
  live: string;
}

export default function Card({
  id,
  title,
  description,
  techs,
  image,
  link,
  live,
}: CardProps) {
  return (
    <div className="surface hover-glow flex flex-col overflow-hidden rounded-lg transition-transform duration-(--duration-base) hover:scale-[101%]">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={`Imagem do projeto ${title}`}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex grow flex-col p-4 gap-3">
        <h3 className="text-lg font-semibold text-zinc-50">{title}</h3>

        <p className="grow text-sm text-(--color-text-secondary)">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {techs.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="text-(--color-text-muted) border-(--color-border-subtle) bg-(--color-surface-elevated)"
            >
              {tech}
            </Badge>
          ))}
        </div>

        <div className="mt-auto flex flex-row gap-3">
          <Button variant="secondary" size="sm" asChild>
            <Link href={`/projetos/${id}`}>Detalhes</Link>
          </Button>

          {link && (
            <Button variant="outline" size="sm" asChild>
              <a href={link} target="_blank" rel="noopener noreferrer">
                Código
              </a>
            </Button>
          )}

          {live && (
            <Button variant="outline" size="sm" asChild>
              <a href={live} target="_blank" rel="noopener noreferrer">
                Live
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
