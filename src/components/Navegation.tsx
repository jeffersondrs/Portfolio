'use client';

import React, { useContext } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ThemeContext } from '@/context/ThemeProvider';
import { Logo, Menu, ToggoeButton } from '@/components/index';
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
          className=" items-center space-x-4 transition-all hidden md:flex justify-center gap-5
          "
        >
          <li className="transition-all underline-hover">
            <Link href="/" className="underline-hover">
              <p className="uppercase transition-all font-black tracking-wider text-start whitespace-pre-wrap break-words text-sm">
                Home
              </p>
            </Link>
          </li>
          <li className="transition-all underline-hover">
            <Link href="/about" className="underline-hover">
              <p className="uppercase transition-all font-black tracking-wider text-start whitespace-pre-wrap break-words text-sm">
                About
              </p>
            </Link>
          </li>{' '}
          <li className="transition-all underline-hover">
            <Link href="/contact" className="underline-hover">
              <p className="uppercase transition-all font-black tracking-wider text-start whitespace-pre-wrap break-words text-sm">
                Contact
              </p>
            </Link>
          </li>{' '}
          <li className="transition-all underline-hover">
            <Link
              href="https://jeffersondrsblog.vercel.app/"
              className="underline-hover"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              <p className="uppercase transition-all font-black tracking-wider text-start whitespace-pre-wrap break-words text-sm">
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
