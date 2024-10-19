'use client';

import React, { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeProvider';
import Hello from '@/components/Hello';
import { SectionMyJourney, SectioProjects } from '@/components/index';

export default function Home() {
  const { isDark } = useContext(ThemeContext);

  return (
    <main
      className={`
    ${isDark ? 'bg-gray-950 text-white' : 'bg-gray-100 text-black'}
    flex flex-col items-center max-w-[100rem] h-full justify-center px-5 py-10 w-full
    `}
    >
      <Hello />
      <SectionMyJourney />
      <SectioProjects />
    </main>
  );
}
