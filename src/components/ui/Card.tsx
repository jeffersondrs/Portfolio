import React from 'react';
import Link from 'next/link';

export interface CardProps {
  id: number;
  title: string;
  description: string;
  techs: string[];
  image: string;
  link: string;
  live: string;
}

/**
 * Displays a single project summary with an image, title, description, technologies and links.
 * This card is used on the projects listing page.
 */
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
    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-[101%] dark:bg-gray-800 dark:text-gray-50">
      <img
        src={image}
        alt={`Imagem do projeto ${title}`}
        className="h-48 w-full object-cover"
      />
      <div className="flex grow flex-col p-4">
        <h3 className="mb-2 text-lg font-semibold">{title}</h3>
        <p className="mb-4 flex-grow text-sm">{description}</p>
        <div className="mb-4 flex flex-wrap gap-2 text-xs">
          {techs.map((tech) => (
            <span
              key={tech}
              className="rounded bg-gray-200 px-2 py-1 dark:bg-gray-700 dark:text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-auto flex flex-row gap-3">
          <Link
            href={`/projetos/${id}`}
            className="rounded bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            Detalhes
          </Link>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded bg-gray-300 px-3 py-2 text-sm font-medium dark:bg-gray-700 dark:text-gray-200"
            >
              Código
            </a>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded bg-green-600 px-3 py-2 text-sm font-medium text-white hover:bg-green-700"
            >
              Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
