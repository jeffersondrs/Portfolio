'use client';

import React from 'react';
import { ThemeContext } from '@/context/ThemeProvider';
import { useContext } from 'react';
import { projetos } from '@/api/data';
import { motion } from 'framer-motion';

export default function ProjectsPage() {
  const { isDark } = useContext(ThemeContext);

  return (
    <section
      className={`flex flex-row items-center w-full h-full sm:h-full sm:py-3 justify-center px-5 py-10 gap-5
    ${isDark ? 'bg-gray-950 text-white' : 'bg-gray-100 text-black'}
    `}
    >
      {projetos.map((projetos) => (
        <motion.img
          initial={{ x: 0, y: 0 }}
          whileHover={{ x: 10, y: 10 }}
          transition={{
            type: 'spring',
            damping: 30,
            stiffness: 30,
            restDelta: 0.001,
          }}
          key={projetos.projectId}
          src="/itsme.jpg"
          alt="Toca Hobbit"
          width={1920}
          height={1080}
          className="z-40 w-56 sm:w-28 translate-x-10 rounded-lg"
        />
      ))}
    </section>
  );
}
