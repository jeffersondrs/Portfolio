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
      className="flex flex-col translate-y-20 left-0 right-0 justify-center  items-center display-none md:hidden z-50 absolute"
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
        className={`flex flex-col  p-2 shadow-lg border border-gray-100 rounded-none
          ${isDark ? 'bg-gray-900 border-none' : 'bg-gray-100 '}
        `}
      >
        <Link href={'/'}>
          <motion.li
            className={`
            p-2 rounded-t-md hover:cursor-pointer flex flex-row items-center justify-between gap-6 ${
              isDark
                ? 'text-white hover:bg-gray-700'
                : 'text-black hover:bg-gray-400'
            }
             `}
            variants={itemVariants}
          >
            <p className="font-mono tracking-widest">Home</p>
            <HomeIcon className="w-3 h-3" />
          </motion.li>
        </Link>
        <Link href={'/about'}>
          <motion.li
            className={`p-2 hover:cursor-pointer flex flex-row items-center justify-between gap-6 ${
              isDark
                ? 'text-white hover:bg-gray-700'
                : 'text-black hover:bg-gray-400'
            }            `}
            variants={itemVariants}
          >
            <p className="font-mono tracking-widest">Sobre</p>
            <User2 className="w-3 h-3" />
          </motion.li>
        </Link>
        <Link href={'/contact'}>
          <motion.li
            className={`
             p-2 hover:cursor-pointer flex flex-row items-center justify-between gap-6 ${
               isDark
                 ? 'text-white hover:bg-gray-700'
                 : 'text-black hover:bg-gray-400'
             }            `}
            variants={itemVariants}
          >
            <p className="font-mono tracking-widest">Contato</p>
            <MessageSquare className="w-3 h-3" />
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
             p-2 rounded-b-md hover:cursor-pointer flex flex-row items-center justify-between gap-6 ${
               isDark
                 ? 'text-white hover:bg-gray-700'
                 : 'text-black hover:bg-gray-400'
             }            `}
            variants={itemVariants}
          >
            <p className="font-mono tracking-widest">Blog</p>
            <FileCode2 className="w-3 h-3" />
          </motion.li>
        </Link>
      </motion.ul>
    </motion.div>
  );
}
