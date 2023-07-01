import React from "react";
import { motion } from "framer-motion";

const Hello = () => {
    
const spring = {
  type: "spring",
  stiffness: 100,
  damping: 10,
};
  return (
    <motion.div
      initial={{ translateY: -30, opacity: 0 }}
      animate={{
        translateY: 0,
        opacity: 1,
      }}
      transition={spring}
      
      className="p-10 sm:p-0 sm:mt-5 flex flex-col items-center justify-center w-full h-full sm:flex-col"
    >
      <p className="text-5xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r  from-purple-400 to-red-400">
        Oi, eu sou Jefferson
      </p>

      <p className="text-xl sm:text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Rio de Janeiro, Brasil
      </p>
    </motion.div>
  );
};

export default Hello;
