import React from 'react'
import { motion } from "framer-motion";

export default function AnimatedTitle ({ text }) {
    const words = text.split(" ");
  
  // Variants for Container of words.
    const container = {
      hidden: { opacity: 0 },
      visible: (i = 1) => ({
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.06 * i },
      }),
    };
  
  // Variants for each word.
  
  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 8,
        stiffness: 50,
      },
    },
    hidden: {
      opacity: 0,
      x: 2,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 50,
      },
    },
  };

    return (
      <motion.div
        style={{ overflow: "hidden" }}
        variants={container}
        initial="hidden"
        whileInView='visible'
        viewport={{ once: true }}
        className='flex justify-center items-center w-[265px] sm:w-[340px] md:w-[400px] lg:w-[550px] ml-auto'
      >
        {words.map((word, index) => (
          <motion.span
            variants={child}
            
            style={{ marginRight: "5px", textAlign: 'right' }}
            key={index}
            className='mt-2 font-bold text-white mb-4 text-sm sm:text-lg sm:mb-6 sm:mt-3 md:mr-4 md:text-xl lg:text-3xl md:mb-6 md:mt-6 lg:mt-1 lg:mb-1'
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    );
  };
  