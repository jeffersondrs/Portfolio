'use client';

import React from 'react';
import { ThemeContext } from '@/context/ThemeProvider';
import { useContext } from 'react';
import FormContact from '@/components/FormContact';
import Curriculo from '@/components/Curriculo';

export default function ContactPage() {
  const { isDark } = useContext(ThemeContext);
  return (
    <section
      className={`flex flex-col items-center w-full h-full sm:h-full sm:py-16 justify-center px-5 sm:p-1 py-20 gap-5
    ${isDark ? 'bg-gray-950 text-white' : 'bg-gray-100 text-black'}
    `}
    >
      <FormContact />
      <div className="pt-10">
        <Curriculo />
      </div>
      
    </section>
  );
}
