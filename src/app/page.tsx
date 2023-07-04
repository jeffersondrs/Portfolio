'use client';

// import Image from "next/image";
// import { motion } from "framer-motion";
import { ThemeContext } from '@/context/ThemeProvider';
import { useContext } from 'react';
import Hello from '@/components/Hello';
// import MotionOne from "@/components/Scrolling";
import ProjectLayout from '@/components/ProjectLayout';
import { projetos } from '@/api/data';

export default function Home() {
  const { isDark } = useContext(ThemeContext);

  return (
    <main
      className={`
    ${isDark ? 'bg-gray-950 text-white' : 'bg-gray-100 text-black'}
    flex flex-col items-center w-full h-full sm:h-full sm:py-3 justify-center px-5 py-10 sm:px-3 gap-5
    `}
    >
      <div className="flex flex-col justify-center items-center gap-20 sm:gap-5 py-5">
        <Hello />
      </div>
      <div className="flex flex-col justify-center items-center gap-20 sm:gap-5 py-5">
        {projetos.map((projeto) => (
          <ProjectLayout
            key={projeto.id}
            productId={projeto.id}
            productName={projeto.title}
            productDescription={projeto.description}
            productImage={projeto.image}
            projectTechs={projeto.techs}
          />
        ))}
      </div>
    </main>
  );
}
