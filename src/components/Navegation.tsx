"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "@/context/ThemeProvider";
import { useContext } from "react";
import ToggoeButton from "./ToggleButton";
interface NavegationProps {
  children?: React.ReactNode;
}

export default function Navegation({ children }: NavegationProps) {
  const { isDark } = useContext(ThemeContext);
  return (
    <>
      <nav
        className={`
      ${isDark ? "bg-gray-950 text-white" : "bg-gray-100 text-black"}
      flex w-full justify-evenly items-center px-4 py-2 pr-10
      `}
      >
        <Link href="/">
          <div>
            <div className="flex flex-row gap-2 items-center">
              <motion.span
                initial={{ translateX: -35, opacity: 1 }}
                animate={{ translateX: 12 }}
                transition={{ duration: 1, repeat: 2, repeatType: "reverse" }}
                className="text-4xl bg-yellow-400 px-2"
              >
                J
              </motion.span>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
                className="text-2xl px-1"
              >
                efferson
              </motion.p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <motion.span
                initial={{ translateY: -40, opacity: 1 }}
                animate={{ translateY: 0, translateX: 22 }}
                transition={{ duration: 1, repeat: 2, repeatType: "reverse" }}
                className="text-4xl bg-yellow-400 px-2"
              >
                S
              </motion.span>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, translateX: 10 }}
                transition={{ duration: 1, delay: 2 }}
                className="text-2xl px-1"
              >
                antos
              </motion.p>
            </div>
          </div>
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
        <div className="absolute right-10 sm:left-1 sm:top-1 flex flex-col justify-center items-center w-20">
          <ToggoeButton />
          <span className="text-xs">Theme</span>
        </div>
      </nav>
      {children}
    </>
  );
}
