import React from 'react';
import { ThemeContext } from '@/context/ThemeProvider';
import { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MoveRight } from 'lucide-react';
import { Carroucel } from './Carroucel';

interface ProjectLayoutProps {
  productId: number;
  productName: string;
  productDescription: string;
  productImage: string[];
  productLink?: string;
  projectTechs: string[] | undefined;
}

export default function ProjectLayout({
  productId,
  productDescription,
  productImage,
  productName,
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
    w-full overflow-hidden rounded-3xl shadow-lg  transition-all duration-500 ease-in-out text-gray-100 p-5 sm:p-2 flex flex-row sm:flex-col justify-center items-center hover:scale-105 transform hover:shadow-2xl gap-5 sm:gap-1 h-full
    `}
      key={productId}
    >
      <section
        className={`
        flex flex-col justify-start items-start w-full h-full text-black px-5 py-5 gap-3 tracking-wider
        ${isDark ? 'text-white' : 'text-black'}
      `}
      >
        <h1 className="text-3xl sm:text-2xl font-bold">{productName}</h1>
        <h2 className="text-sm sm:text-xs flex flex-row items-center gap-3 flex-wrap">
          {projectTechs?.map((tech) => (
            <p key={tech}>{tech}</p>
          ))}
          <div className="w-1 h-1 bg-gray-400 rounded-full"></div> 2023
        </h2>
        <p className="text-xl sm:text-sm text-start max-w-xl">
          {productDescription || 'Descrição'}
        </p>
        <div className="py-5 w-full sm:py-1 flex flex-col justify-start items-start sm:items-center">
          <Link
            href={`${productName}`}
            className="flex flex-row justify-between items-center bg-gray-400 hover:bg-gray-600 text-2xl text-white font-bold py-3 px-10 sm:px-5 sm:py-2 sm:text-lg transition-all gap-5 duration-500 ease-in-out rounded-2xl"
          >
            <button className="">Ver mais</button>
            <MoveRight size={32} />
          </Link>
        </div>
      </section>
      <section className="flex flex-row justify-center items-center w-96 sm:w-full max-w-3xl h-full overflow-hidden rounded-r-3xl sm:rounded-t-none sm:rounded-b-3xl">
        <Carroucel images={productImage} />
      </section>
    </div>
  );
}
