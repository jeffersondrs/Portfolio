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
      className={`w-20 z-50 sm:w-14 flex justify-start rounded-full p-1 sm:p-0 cursor-pointer border border-black/30 ${
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
        className={`w-10 h-6 sm:w-10 sm:h-6 rounded-full flex justify-center items-center shadow-xl ${
          isOn ? "bg-black text-white " : "bg-white text-black "
        }
      `}
        layout
        transition={spring}
      >
        {isOn ? (
          <span className="h-2 w-2 bg-black"></span>
        ) : (
          <span className="h-2 w-2 bg-white"></span>
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
