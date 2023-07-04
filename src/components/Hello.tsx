"use client";

import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "@/context/ThemeProvider";
import Link from "next/link";

const Hello = () => {
  const { isDark } = useContext(ThemeContext);
  const spring = {
    type: "spring",
    stiffness: 100,
    damping: 10,
  };

  return (
    <div className="p-10 sm:p-0 sm:mt-5 flex flex-col py-40 sm:py-10 items-center justify-center w-full h-full sm:flex-col gap-3 tracking-wide">
      <motion.p
        initial={{ translateY: -30, opacity: 0 }}
        animate={{
          translateY: 0,
          opacity: 1,
        }}
        transition={spring}
        className="text-6xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r tracking-wide from-purple-500 to-red-500"
      >
        Oi, eu sou o Jefferson.
      </motion.p>
      <motion.p
        initial={{ translateY: -15, opacity: 0 }}
        animate={{
          translateY: 0,
          opacity: 1,
        }}
        transition={{ ...spring, delay: 0.5 }}
        className="text-xl sm:text-lg font-extrabold text-transparent tracking-wider bg-clip-text bg-gradient-to-r from-purple-600 to-pink-800"
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
        text-base sm:text-xs font-extrabold text-transparent tracking-wider bg-clip-text bg-gradient-to-r text-center whitespace-pre-wrap break-words ${
          isDark ? "from-gray-100 to-gray-300" : "from-purple-600 to-pink-800"
        }
        `}
      >
        Desenvolvedor web entusiasta e sonhador, pronto para criar soluções
      </motion.p>
      <div className="flex flex-row items-center justify-center flex-wrap">
        <motion.p
          initial={{ translateY: -15, opacity: 0 }}
          animate={{
            translateY: 0,
            opacity: 1,
          }}
          transition={{
            ...spring,
            delay: 0.9,
          }}
          className={`
        text-base sm:text-xs font-extrabold text-transparent tracking-wider bg-clip-text bg-gradient-to-r text-center whitespace-pre-wrap break-words ${
          isDark ? "from-gray-100 to-gray-200" : "from-purple-600 to-pink-800"
        }
        `}
        >
          inovadoras e contribuir para o futuro digital. Saiba mais
          <Link
            href="/about"
            className={`
            hover:bg-gray-900/5 rounded-full  transition-all duration-500 ease-in-out px-1 cursor-pointer
            ${
              isDark
                ? "bg-gray-900/10 hover:text-white"
                : "bg-purple-600/10 hover:text-black"
            }
            
          `}
          >
            sobre mim.
          </Link>
        </motion.p>
      </div>
    </div>
  );
};

export default Hello;
