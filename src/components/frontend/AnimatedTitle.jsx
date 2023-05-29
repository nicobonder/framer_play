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
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 50,
      },
    },
  };

    return (
      <motion.div
        style={{ overflow: "hidden", display: "flex", fontSize: "2rem" }}
        variants={container}
        initial="hidden"
        whileInView='visible'
        viewport={{ once: true }}
        className='flex justify-center items-center'
      >
        {words.map((word, index) => (
          <motion.span
            variants={child}
            
            style={{ marginRight: "5px" }}
            key={index}
            className='mb-3 text-3xl font-bold text-center text-white sm:mb-6 sm:mt-3 md:mb-6'
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    );
  };
  