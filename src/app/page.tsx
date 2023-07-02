"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ThemeContext } from "@/context/ThemeProvider";
import { useContext } from "react";
import Hello from "@/components/Hello";
import MotionOne from "@/components/Scrolling";

export default function Home() {
  const { isDark } = useContext(ThemeContext);
  return (
    <main
      className={`
    ${isDark ? "bg-gray-950 text-white" : "bg-gray-100 text-black"}
    flex flex-col items-center w-full h-screen justify-center
    `}
    >
      <Hello />
      {/* <div className="w-full px-44 sm:px-3 md:px-10 lg:px-20 h-48">
        <MotionOne />
      </div> */}
    </main>
  );
}
