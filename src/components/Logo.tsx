import { motion } from "framer-motion";

const YourComponent = () => {
  return (
    <motion.div
      className="hover:translate-x-3 hover:translate-y-3 transition-all duration-300 ease-in-out transform cursor-pointer"
      whileHover={{ translateX: 3, translateY: 3 }}
    >
      <motion.p
        className="text-2xl"
        whileHover={{ translateX: 4, translateY: 3 }}
      >
        <motion.span
          className="text-4xl bg-yellow-400 px-2 border border-black"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          J
        </motion.span>
        <span>efferson</span>
      </motion.p>
      <motion.p
        className="text-2xl translate-x-4 translate-y-3"
        whileHover={{ translateX: 4, translateY: 3 }}
      >
        <motion.span
          className="bg-yellow-400 px-2 text-4xl border border-black"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          S
        </motion.span>
        <span>Santos</span>
      </motion.p>
    </motion.div>
  );
};
