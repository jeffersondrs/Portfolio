import { motion } from 'framer-motion';

const YourComponent = () => {
  return (
    <div>
      <div className="flex flex-row gap-2 items-center">
        <motion.span
          initial={{ translateX: -30, opacity: 1 }}
          animate={{ translateX: 12 }}
          transition={{ duration: 1, repeat: 2, repeatType: 'reverse' }}
          className="text-base bg-yellow-400 p-1"
        >
          J
        </motion.span>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="text-sm px-1"
        >
          efferson
        </motion.p>
      </div>
      <div className="flex flex-row gap-2 items-center">
        <motion.span
          initial={{ translateY: -30, opacity: 1 }}
          animate={{ translateY: 0, translateX: 22 }}
          transition={{ duration: 1, repeat: 2, repeatType: 'reverse' }}
          className="text-base bg-yellow-400 p-1"
        >
          S
        </motion.span>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, translateX: 10 }}
          transition={{ duration: 1, delay: 2 }}
          className="text-sm px-1"
        >
          antos
        </motion.p>
      </div>
    </div>
  );
};

export default YourComponent;
