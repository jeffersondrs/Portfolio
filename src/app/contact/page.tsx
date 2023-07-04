"use client";

import React from "react";
import { ThemeContext } from "@/context/ThemeProvider";
import { useContext } from "react";
import Home from "@/components/WidowsSize";

export default function ContactPage() {
  const { isDark } = useContext(ThemeContext);
  return (
    <section
      className={`
    ${isDark ? "bg-gray-950 text-white" : "bg-gray-100 text-black"}
    `}
    >
      <Home />
    </section>
  );
}
