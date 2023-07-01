import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import Link from "next/link";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="flex flex-col w-48 sm:items-end sm:w-full"
    >
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-row justify-between items-center w-full p-3 bg-gray-100 rounded-md shadow-md focus:outline-none sm:hidden"
      >
        Menu
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
        >
          <svg width="15" height="15" viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </motion.div>
      </motion.button>
      <MenuToggle toggle={() => setIsOpen(!isOpen)} />
      <motion.ul
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
        className="flex flex-col gap-2 p-1 bg-gray-100 rounded-md shadow-md sm:w-48"
      >
        <Link href={"/"}>
          <motion.li
            className="hover:bg-gray-300 p-1 rounded-md hover:cursor-pointer"
            variants={itemVariants}
          >
            Home
          </motion.li>
        </Link>
        <Link href={"/about"}>
          <motion.li
            className="hover:bg-gray-300 p-1 rounded-md hover:cursor-pointer"
            variants={itemVariants}
          >
            Sobre
          </motion.li>
        </Link>
        <Link href={"/contact"}>
          <motion.li
            className="hover:bg-gray-300 p-1 rounded-md hover:cursor-pointer"
            variants={itemVariants}
          >
            Contato
          </motion.li>
        </Link>
      </motion.ul>
    </motion.nav>
  );
}