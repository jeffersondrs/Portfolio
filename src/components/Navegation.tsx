"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import Menu from "./Menu";

interface NavegationProps {
  children?: React.ReactNode;
}

export default function Navegation({ children }: NavegationProps) {
  return (
    <>
      <nav className="flex w-full justify-evenly items-center px-4 py-2 pr-10">
        <div
          className="hover:translate-x-3 hover:translate-y-3 transition-all 
        duration-300 ease-in-out transform cursor-pointer
        "
        >
          <motion.p
            whileHover={{
              translateX: 20,
              scaleX: 1.3,
            }}
            transition={{
              duration: 3,
              repeat: 1,
            }}
            className="text-2xl"
          >
            <span
              className="text-4xl bg-yellow-400 px-2 border 
            border-black"
            >
              J
            </span>
            <span>efferson</span>
          </motion.p>
          <p className="text-2xl translate-x-4 translate-y-3">
            <span
              className="bg-yellow-400 px-2 text-4xl border 
            border-black
            "
            >
              S
            </span>
            <span
              className="text-2xl
            "
            >
              antos
            </span>
          </p>
        </div>
        {/* <div className="">
          <Menu />
        </div> */}

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
      </nav>
      {children}
    </>
  );
}
