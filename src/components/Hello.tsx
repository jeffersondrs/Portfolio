'use client';

import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '@/context/ThemeProvider';
import Link from 'next/link';

const Hello = () => {
  const { isDark } = useContext(ThemeContext);
  const spring = {
    type: 'spring',
    stiffness: 100,
    damping: 10,
  };

  return (
    <div className="p-10 sm:p-0 sm:mt-5 flex flex-col py-40 sm:py-5 items-center px-40 justify-center xl:items-start w-full h-full xl:flex-row gap-3 tracking-wide">
      <div className="flex flex-col items-start justify-start flex-wrap">
        <motion.p
          initial={{ translateY: -30, opacity: 0 }}
          animate={{
            translateY: 0,
            opacity: 1,
          }}
          transition={spring}
          className="text-2xl xl:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r tracking-wide from-orange-500 to-yellow-500 "
        >
          Olá, eu sou o Jefferson,
        </motion.p>
        <motion.p
          initial={{ translateY: -30, opacity: 0 }}
          animate={{
            translateY: 0,
            opacity: 1,
          }}
          transition={spring}
          className="text-2xl xl:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r tracking-wide from-orange-500 to-yellow-500 "
        >
          seja bem-vindo!
        </motion.p>
        <motion.p
          initial={{ translateY: -15, opacity: 0 }}
          animate={{
            translateY: 0,
            opacity: 1,
          }}
          transition={{ ...spring, delay: 0.5 }}
          className="text-lg xl:text-2xl font-extrabold text-transparent tracking-wider bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-500"
        >
          Rio de Janeiro, Brasil
        </motion.p>
        <motion.p
          initial={{ translateY: -15, opacity: 0 }}
          animate={{
            translateY: 0,
            opacity: 1,
          }}
          transition={{ ...spring, delay: 0.9 }}
          className={`
          text-base sm:text-lg font-extrabold text-transparent tracking-wider bg-clip-text bg-gradient-to-r text-start whitespace-pre-wrap break-words from-yellow-600 to-yellow-500 ${
            isDark
              ? 'from-gray-100 to-gray-300'
              : 'from-yellow-600 to-yellow-500'
          }
            `}
        >
          Desenvolvedor web entusiasta e sonhador, pronto para criar soluções
        </motion.p>
        <motion.div
          initial={{ translateY: -15, opacity: 0 }}
          animate={{
            translateY: 0,
            opacity: 1,
          }}
          transition={{
            ...spring,
            delay: 0.9,
          }}
          className={`flex flex-row items-center justify-start flex-wrap`}
        >
          <p
            className={`
                text-base sm:text-lg font-extrabold text-transparent tracking-wider  text-start whitespace-pre-wrap break-words bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-600
              ${
                isDark
                  ? 'from-gray-100 to-gray-200'
                  : 'from-yellow-600 to-yellow-500'
              }`}
          >
            inovadoras e contribuir para o futuro digital. Saiba mais
          </p>
          <Link href="/about" className="mx-1 underline-hover">
            <p
              className={`
                text-base sm:text-lg font-extrabold text-transparent tracking-wider bg-clip-text bg-gradient-to-r text-start whitespace-pre-wrap break-words from-yellow-600 to-orange-500
              `}
            >
              sobre mim.
            </p>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hello;
