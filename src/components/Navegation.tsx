'use client';

import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '@/context/ThemeProvider';
import { useContext } from 'react';
import ToggoeButton from './ToggleButton';
import Menu from './Menu';
import Logo from './Logo';
interface NavegationProps {
  children?: React.ReactNode;
}

export default function Navegation({ children }: NavegationProps) {
  const { isDark } = useContext(ThemeContext);
  return (
    <>
      <motion.nav
        initial={{ translateY: -30, opacity: 0 }}
        animate={{
          translateY: 0,
          opacity: 1,
        }}
        transition={{ duration: 0.5 }}
        className={`
      ${isDark ? 'bg-gray-950 text-white' : 'bg-gray-100 text-black'}
      flex w-full justify-between sm:justify-between sm:items-center items-center px-4`}
      >
        <Link href="/">
          <Logo />
        </Link>
        <div
          className="flex items-center space-x-4 sm:hidden transition-all 
        duration-500 ease-in-out transform cursor-pointer
          "
        >
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-400">
            About
          </Link>
          <Link href="/contact" className="hover:text-gray-400">
            Contact
          </Link>
        </div>
        <Menu />
        <div className="flex flex-col justify-center items-center ">
          <ToggoeButton />
          <span className="text-xs">Theme</span>
        </div>
      </motion.nav>
      {children}
    </>
  );
}
