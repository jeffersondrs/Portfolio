import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "@/context/ThemeProvider";
import { useContext } from "react";

export default function ToggoeButton() {
  const [isOn, setIsOn] = useState(false);
  const { toggleTheme } = useContext(ThemeContext);
  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <div
      className={`w-32 bg-gray-200 flex justify-start rounded-full p-2 cursor-pointer ${
        isOn ? "justify-end" : "justyfy-start"
      }
    `}
      data-isOn={isOn}
      onClick={() => {
        toggleSwitch();
        toggleTheme();
      }}
    >
      <motion.div
        className={`w-16 h-10 rounded-full flex justify-center items-center shadow-xl ${
          isOn ? "bg-black text-white" : "bg-white text-black"
        }
      `}
        layout
        transition={spring}
      >
        {isOn ? (
          <span className="text-xl">Dark</span>
        ) : (
          <span className="text-xl">Light</span>
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
