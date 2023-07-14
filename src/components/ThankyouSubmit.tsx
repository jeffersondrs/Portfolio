import React from 'react';
import { ThemeContext } from '@/context/ThemeProvider';
import { useContext } from 'react';
import { motion } from 'framer-motion';
import { Twitter, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

interface ThankProps {
  name: string;
}

export default function ThankYouSubmit({ name }: ThankProps) {
  const { isDark } = useContext(ThemeContext);

  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center"
      >
        <h1
          className={`text-4xl sm:text-2xl font-bold text-center
        ${isDark ? 'text-white' : 'text-black'}
        `}
        >
          Obrigado por entrar em contato {name.split(' ')[0]}
        </h1>

        <p
          className={`text-xl sm:text-2xl text-center
        ${isDark ? 'text-white' : 'text-black'}
        `}
        >
          Em breve retornarei o contato.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center mt-10"
      >
        <p
          className={`text-xl sm:text-2xl text-center
        ${isDark ? 'text-white' : 'text-black'}
        `}
        >
          Enquanto isso, que tal me seguir nas redes sociais?
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-row items-center justify-center gap-5 mt-5 border border-gray-300 rounded-lg p-2"
      >
        <Link href="https://twitter.com/kalliadranoth">
          <Twitter
            size={40}
            className={`hover:text-white transition-all duration-300 ease-in-out p-1 rounded-md hover:bg-gradient-radial from-blue-400 to-sky-400 sm:w-6 sm:h-6 ${
              isDark ? 'text-white' : 'text-black'
            }
            `}
          />
        </Link>
        <Link href="https://github.com/jeffersondrs">
          <Github
            size={40}
            className={`hover:text-white transition-all duration-300 ease-in-out p-1 rounded-md hover:bg-gradient-to-tl from-black to-sky-900 sm:w-6 sm:h-6 ${
              isDark ? 'text-white' : 'text-black'
            }`}
          />
        </Link>

        <Link href="https://www.linkedin.com/in/jeffersondrs/">
          <Linkedin
            size={40}
            className={`hover:text-white transition-all duration-300 ease-in-out p-1 rounded-md hover:bg-gradient-radial from-blue-400 to-blue-700 sm:w-6 sm:h-6
                ${isDark ? 'text-white' : 'text-black'}`}
          />
        </Link>
      </motion.div>
    </div>
  );
}
