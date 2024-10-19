'use client';

import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';
import { ThemeContext } from '@/context/ThemeProvider';
import { useContext } from 'react';
import { FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  const { isDark } = useContext(ThemeContext);
  return (
    <footer
      className={`
      ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-200/60 text-black'}
      flex justify-center items-center w-full p-5 bg-gray-100 flex-col max-w-[100rem]
    `}
    >
      <div className="flex flex-row gap-3">
        <Link href="https://twitter.com/kalliadranoth">
          <FaXTwitter
            size={24}
            className="hover:text-white transition-all duration-300 ease-in-out p-1 rounded-md hover:bg-gradient-to-tl from-black to-sky-900 w-6 h-6"
          />
        </Link>
        <Link href="https://github.com/jeffersondrs">
          <Github
            size={24}
            className="hover:text-white transition-all duration-300 ease-in-out p-1 rounded-md hover:bg-gradient-to-tl from-black to-sky-900 w-6 h-6"
          />
        </Link>

        <Link href="https://www.linkedin.com/in/jeffersondrs/">
          <Linkedin
            size={24}
            className="hover:text-white transition-all duration-300 ease-in-out p-1 rounded-md hover:bg-gradient-radial from-blue-400 to-blue-700 w-6 h-6"
          />
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center md:flex-row gap-3">
        <p className="tracking-wider">
          Feito com <span className="text-red-500">❤️</span> por{' '}
          <Link
            className="text-blue-500 hover:text-blue-700 transition-all duration-200 ease-in-out"
            href="
          https://x.com/kalliadranoth"
          >
            Jefferson Santos
          </Link>
        </p>
      </div>
      <div className="py-2">
        <p className="text-sm sm:text-xs text-gray-500">
          © Copyrigth {new Date().getFullYear()} - Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
