import { ThemeContext } from '@/context/ThemeProvider';
import { useContext } from 'react';
import Link from 'next/link';
import { MoveRight } from 'lucide-react';
import { Carroucel } from './Carroucel';
import { ProjectLayoutProps } from '@/types/global-types';

export default function ProjectLayout({
  projectId,
  projectDescription,
  projectImage,
  projectName,
  projectTechs,
}: ProjectLayoutProps) {
  const { isDark } = useContext(ThemeContext);

  return (
    <div
      className={` ${
        isDark
          ? 'bg-gray-900 text-white hover:shadow-sm hover:bg-gray-800'
          : 'bg-gray-200 text-black hover:shadow-sm hover:bg-slate-50'
      }
    w-full overflow-hidden shadow-lg transition-all duration-500 ease-in-out text-gray-100  flex flex-col justify-center items-center hover:scale-[101%] transform hover:shadow-2xl gap-2 h-full md:flex-row
    `}
      key={projectId}
    >
      <section
        className={`
        flex flex-col justify-start lg:justify-center items-start w-full h-full text-black px-6 py-3 gap-3 tracking-wider ${isDark ? 'text-white' : 'text-black'}
      `}
      >
        <h1 className="text-lg font-bold">{projectName}</h1>
        <div className="text-xs flex flex-row items-center gap-3 flex-wrap">
          {projectTechs?.map((tech) => <p key={tech}>{tech}</p>)}
          <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
        </div>
        <p className="text-xs text-start max-w-xl">
          {projectDescription || 'Descrição'}
        </p>
        <div
          className="w-full flex flex-col justify-start items-center"
        >
          <Link
            href={`/projetos/${projectId}`}
            className="flex flex-row justify-between items-center bg-gray-700 hover:bg-gray-800  text-white py-3 px-5 transition-all gap-3 hover:gap-5 duration-500 ease-in-out shadow-md"
          >
            <button type="button" className="text-xs">
              Ver mais
            </button>
            <MoveRight size={18} />
          </Link>
        </div>
      </section>
      <aside className="flex flex-row justify-center items-center w-full max-w-2xl h-full overflow-hidden">
        <Carroucel images={projectImage} />
      </aside>
    </div>
  );
}
