import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "@/context/ThemeProvider";
import { useContext } from "react";

export default function ToggoeButton() {
  const [isOn, setIsOn] = useState(false);
  const { toggleTheme, isDark } = useContext(ThemeContext);
  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <div
      className={`w-20 sm:w-16 flex justify-start rounded-full p-1 sm:p-0 cursor-pointer ${
        isOn ? "justify-end" : "justyfy-start"
      }
      ${isDark ? "bg-gray-600" : "bg-gray-200"}
    `}
      onClick={() => {
        toggleSwitch();
        toggleTheme();
      }}
    >
      <motion.div
        className={`w-10 h-6 sm:w-10 sm:border sm:h-6 rounded-full flex justify-center items-center shadow-xl ${
          isOn ? "bg-black text-white sm:border-white" : "bg-white text-black sm:border-black"
        }
      `}
        layout
        transition={spring}
      >
        {isOn ? (
          <span className="text-xs">Dark</span>
        ) : (
          <span className="text-xs">Light</span>
        )}
      </motion.div>
    </div>
  );
}

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};
