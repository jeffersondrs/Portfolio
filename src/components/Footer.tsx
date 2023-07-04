"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Twitter, Github, Linkedin } from "lucide-react";
import { ThemeContext } from "@/context/ThemeProvider";
import { useContext } from "react";

export default function Footer() {
  const { isDark } = useContext(ThemeContext);
  return (
    <footer
      className={`
      ${isDark ? "bg-gray-900 text-white" : "bg-gray-200/60 text-black"}
      flex justify-center items-center w-full p-10 sm:p-5 bg-gray-100 flex-col sm:text-xs
    `}
    >
      <div className="flex flex-row gap-3">
        <Link href="https://twitter.com/kalliadranoth">
          <Twitter
            size={40}
            className="hover:text-white transition-all duration-300 ease-in-out p-1 rounded-md hover:bg-gradient-radial from-blue-400 to-sky-400 sm:w-6 sm:h-6"
          />
        </Link>
        <Link href="https://github.com/jeffersondrs">
          <Github
            size={40}
            className="hover:text-white transition-all duration-300 ease-in-out p-1 rounded-md hover:bg-gradient-to-tl from-black to-sky-900 sm:w-6 sm:h-6"
          />
        </Link>

        <Link href="https://www.linkedin.com/in/jeffersondrs/">
          <Linkedin
            size={40}
            className="hover:text-white transition-all duration-300 ease-in-out p-1 rounded-md hover:bg-gradient-radial from-blue-400 to-blue-700 sm:w-6 sm:h-6"
          />
        </Link>
      </div>
      <div className="flex flex-row gap-3 mt-5 sm:mt-1">
        <p className="tracking-wider">
          Made with <span className="text-red-500">❤️</span> by{" "}
          <Link
            className="text-blue-500 hover:text-blue-700 transition-all duration-200 ease-in-out"
            href="
          https://twitter.com/kalliadranoth"
          >
            Jefferson Santos
          </Link>
        </p>
      </div>
      <div>
        <p className="text-sm sm:text-xs text-gray-500">
          © Copyrigth {new Date().getFullYear()} - All rights reserved
        </p>
      </div>
    </footer>
  );
}
