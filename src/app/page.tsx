"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full h-screen justify-between">
      <nav className="flex w-full justify-between items-center px-4 py-2 pr-10">
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
          className="text-2xl">
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

        <div className="flex items-center space-x-4 sm:hidden">
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

      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-4xl font-bold text-center z-10">
          Jefferson Santos
        </h1>
        <h2 className="text-2xl font-bold text-center z-10">
          Desenvolvedor Front-End
        </h2>
        <div>
          <motion.div
            whileHover={{
              translateY: -20,
              scale: 1.3,
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 0.5,
              repeatType: "reverse",
            }}
            className="w-40 h-40 bg-yellow-100/30 -z-10"
          />
        </div>
      </div>
    </main>
  );
}
