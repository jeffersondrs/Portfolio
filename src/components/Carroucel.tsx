'use client';

import * as React from 'react';
import { useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';
import { ThemeContext } from '@/context/ThemeProvider';
import { ChevronLeft, ChevronRight, ChevronLeftCircle } from 'lucide-react';

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

interface CaroucelProps {
  images: string[];
}

export const Carroucel = ({ images }: CaroucelProps) => {
  const { isDark } = useContext(ThemeContext);
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className="w-full min-w-fit h-60 relative flex justify-center items-center ">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          className="absolute"
        >
          <img
            src={images[imageIndex]}
            className="w-full h-full object-cover"
            alt="Imagem do projeto"
          />
        </motion.div>
      </AnimatePresence>

      <div
        className={`
        ${isDark ? 'bg-black text-white' : 'bg-white text-black'}
        absolute rounded-full w-6 h-6 shadow-lg border border-gray-100 flex justify-center items-center select-none cursor-pointer font-bold text-sm z-10 right-1
        `}
        onClick={() => paginate(1)}
      >
        <ChevronRight size={10} />
      </div>
      <div
        className={`
        ${isDark ? 'bg-black text-white' : 'bg-white text-black'}
        absolute rounded-full w-6 h-6 shadow-lg border border-gray-100 flex justify-center items-center select-none cursor-pointer font-bold text-sm z-10 left-1`}
        onClick={() => paginate(-1)}
      >
        <ChevronLeft size={10} />
      </div>
    </div>
  );
};
