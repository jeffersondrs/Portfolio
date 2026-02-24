"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const links = [
  { href: "/", label: "Início" },
  { href: "/projetos", label: "Projetos" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-(--color-border) bg-background/80 backdrop-blur-sm">
      <div className="px-6 flex h-14 max-w-7xl w-full mx-auto items-center justify-between">
        <Link href="/" className="text-lg font-bold text-zinc-50">
          Jefferson
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex text-sm font-medium flex-row gap-6 text-(--color-text-secondary)">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`underline-hover transition-colors hover:text-zinc-50
                  ${pathname === href ? "text-zinc-50" : ""}
                `}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-(--color-text-secondary) hover:text-zinc-50"
              >
                <Menu size={20} />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="bg-(--color-surface) border-(--color-border) w-64 p-0"
            >
              <SheetTitle className="sr-only">Menu</SheetTitle>

              <div className="flex flex-col h-full">
                <div className="flex items-center h-14 px-6 border-b border-(--color-border)">
                  <span className="text-lg font-bold text-zinc-50">
                    Jefferson
                  </span>
                </div>

                <ul className="flex flex-col gap-1 p-4">
                  {links.map(({ href, label }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        onClick={() => setOpen(false)}
                        className={`flex items-center w-full px-3 py-2.5 rounded-(--radius-md) text-sm font-medium transition-colors
                          ${
                            pathname === href
                              ? "bg-(--color-surface-elevated) text-zinc-50"
                              : "text-(--color-text-secondary) hover:bg-(--color-surface-elevated) hover:text-zinc-50"
                          }
                        `}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
