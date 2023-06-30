"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full h-screen justify-between">
      <div className="flex flex-row items-center justify-center w-full h-full sm:flex-col">
        <motion.div
          animate={{ translateX: 30, opacity: 1 }}
          transition={{ duration: 2 }}
          className="p-10 sm:p-0 sm:mt-5"
        >
          <p className="text-3xl">Hello, I&apos;m</p>
          <p className="text-4xl">Jefferson Santos</p>
        </motion.div>
        <motion.div
          animate={{ translateX: -20, opacity: 1 }}
          transition={{ duration: 2 }}
          className="w-64 ml-5 rounded-lg overflow-hidden sm:ml-0 sm:mt-5"
        >
          <Image src="/noivo.jpg" alt="foto_perfil" width={300} height={300} />
        </motion.div>
      </div>
    </main>
  );
}
