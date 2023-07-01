"use client";

import Link from "next/link";
import React from "react";
import { ThemeContext } from "@/context/ThemeProvider";
import { useContext } from "react";

export default function AboutPage() {
  const { isDark } = useContext(ThemeContext);
  return (
    <div
      className={`
    ${isDark ? "bg-gray-950 text-white" : "bg-gray-100 text-black"}
    `}
    >
      <h1>About Page</h1>
    </div>
  );
}
