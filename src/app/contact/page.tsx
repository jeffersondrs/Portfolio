"use client";

import Link from "next/link";
import React from "react";
import Menu from "@/components/Menu";
import { ThemeContext } from "@/context/ThemeProvider";
import { useContext } from "react";

export const metadata = {
  title: "Contato",
  description: "Página de contatos",
};

export default function ContactPage() {
  const { isDark } = useContext(ThemeContext);
  return (
    <div className={`
    ${isDark ? "bg-gray-950 text-white" : "bg-gray-100 text-black"}
    `}>
      <h1>Contact Page</h1>
    </div>
  );
}
