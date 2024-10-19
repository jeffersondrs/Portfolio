'use client';
import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import MenuToggle from './MenuToggle';
import Link from 'next/link';
import { ThemeContext } from '@/context/ThemeProvider';
import { useContext } from 'react';
import { HomeIcon, MessageSquare, User2, FileCode2 } from 'lucide-react';

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark } = useContext(ThemeContext);

  return (
    <motion.div
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      className="flex flex-col translate-y-14 left-0 right-0 justify-center  items-center display-none md:hidden z-50"
    >
      <MenuToggle toggle={() => setIsOpen(!isOpen)} />
      <motion.ul
        variants={{
          open: {
            clipPath: 'inset(0% 0% 0% 0% round 10px)',
            transition: {
              type: 'spring',
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: 'inset(10% 50% 90% 50% round 10px)',
            transition: {
              type: 'spring',
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
        className={`flex flex-col gap-2 p-1 rounded-md shadow-md w-40 ${
          isOpen ? 'bg-gray-200' : 'bg-gray-100'
        }
          ${isDark ? 'bg-gray-900' : 'bg-gray-100'}
        `}
      >
        <Link href={'/'}>
          <motion.li
            className={`
            p-1 rounded-md hover:cursor-pointer flex flex-row items-center justify-start gap-2 ${
              isDark
                ? 'text-white hover:bg-gray-700'
                : 'text-black hover:bg-gray-400'
            }
             `}
            variants={itemVariants}
          >
            <HomeIcon className="w-3 h-3" />
            Home
          </motion.li>
        </Link>
        <Link href={'/about'}>
          <motion.li
            className={`
             p-1 rounded-md hover:cursor-pointer flex flex-row items-center justify-start gap-2 ${
               isDark
                 ? 'text-white hover:bg-gray-700'
                 : 'text-black hover:bg-gray-400'
             }            `}
            variants={itemVariants}
          >
            <User2 className="w-3 h-3" />
            Sobre
          </motion.li>
        </Link>
        <Link href={'/contact'}>
          <motion.li
            className={`
             p-1 rounded-md hover:cursor-pointer flex flex-row items-center justify-start gap-2 ${
               isDark
                 ? 'text-white hover:bg-gray-700'
                 : 'text-black hover:bg-gray-400'
             }            `}
            variants={itemVariants}
          >
            <MessageSquare className="w-3 h-3" />
            Contato
          </motion.li>
        </Link>
        <Link
          href="https://jeffersondrsblog.vercel.app/"
          className="hover:text-gray-400"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          {' '}
          <motion.li
            className={`
             p-1 rounded-md hover:cursor-pointer flex flex-row items-center justify-start gap-2 ${
               isDark
                 ? 'text-white hover:bg-gray-700'
                 : 'text-black hover:bg-gray-400'
             }            `}
            variants={itemVariants}
          >
            <FileCode2 className="w-3 h-3" />
            Blog
          </motion.li>
        </Link>
      </motion.ul>
    </motion.div>
  );
}
