import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "@/context/ThemeProvider";
interface PathProps {
  variants: any;
  transition?: any;
  d?: string;
}

const Path = (props: PathProps) => {
  const { isDark } = useContext(ThemeContext);

  return (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke={isDark ? "white" : "black"}
      strokeLinecap="round"
      {...props}
    />
  );
};

export const MenuToggle = ({ toggle }: any) => {
  const { isDark } = useContext(ThemeContext);
  return (
    <button
      className={`rounded-full w-10 h-10 sm:flex flex-col justify-center items-center hidden ${
        isDark ? "bg-gray-600" : "bg-gray-200"
      }`}
      onClick={toggle}
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  );
};
