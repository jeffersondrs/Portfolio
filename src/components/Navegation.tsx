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
      flex items-center px-1 justify-between drop-shadow-sm w-full h-24 max-w-[100rem]`}
      >
        <Link href="/">
          <Logo />
        </Link>
        <ul
          className=" items-center space-x-4 transition-all hidden md:flex justify-center
          "
        >
          <li
            className={` transition-all underline-hover ${
              isDark ? 'hover:text-orange-500' : 'hover:text-yellow-600'
            }`}
          >
            <Link href="/" className="underline-hover">
              <p
                className="transition-all font-black text-transparent tracking-wider bg-clip-text bg-gradient-to-r text-start whitespace-pre-wrap break-words from-yellow-600 to-orange-500
                text-base
        "
              >
                Home
              </p>
            </Link>
          </li>
          <li
            className={` transition-all underline-hover ${
              isDark ? 'hover:text-orange-500' : 'hover:text-yellow-600'
            }`}
          >
            <Link href="/about" className="underline-hover">
              <p
                className="transition-all font-black text-transparent tracking-wider bg-clip-text bg-gradient-to-r text-start whitespace-pre-wrap break-words from-yellow-600 to-orange-500
                text-base
        "
              >
                About
              </p>
            </Link>
          </li>{' '}
          <li
            className={`hover:text-gray-100 transition-all underline-hover ${
              isDark ? 'hover:text-orange-500' : 'hover:text-yellow-600'
            }`}
          >
            <Link href="/contact" className="underline-hover">
              <p
                className="transition-all font-black text-transparent tracking-wider bg-clip-text bg-gradient-to-r text-start whitespace-pre-wrap break-words from-yellow-600 to-orange-500
                text-base
        "
              >
                Contact
              </p>
            </Link>
          </li>{' '}
          <li
            className={`hover:text-gray-100 transition-all underline-hover ${
              isDark ? 'hover:text-orange-500' : 'hover:text-yellow-600'
            }`}
          >
            <Link
              href="https://jeffersondrsblog.vercel.app/"
              className="underline-hover"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              <p
                className="transition-all font-black text-transparent tracking-wider bg-clip-text bg-gradient-to-r text-start whitespace-pre-wrap break-words from-yellow-600 to-orange-500
                text-base
        "
              >
                Blog
              </p>
            </Link>
          </li>
        </ul>
        <Menu />
        <ToggoeButton />
      </motion.nav>
      {children}
    </>
  );
}
