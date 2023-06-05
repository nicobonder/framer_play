import React from 'react'
import { motion } from "framer-motion";

export default function AnimatedText({ text }) {
    const letters = Array.from(text);

    // Variants for Container
      const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
          opacity: 1,
          transition: { staggerChildren: 0.1, delayChildren: 0.05 * i },
        }),
      };
    
    // Variants for each letter
      const child = {
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
          },
        },
        hidden: {
          opacity: 0,
          x: -20,
          y: 10,
          transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
          },
        },
      };
    
      return (
        <motion.div
          className='overflow-hidden flex justify-center items-center w-[290px] sm:w-[340px] md:w-[400px] lg:w-[550px] lg:py-1 ml-auto'
          variants={container}
          initial="hidden"
           whileInView='visible'
        viewport={{ once: true }}
        >
          {letters.map((letter, index) => (
            <motion.span variants={child} key={index} className='text-lg md:text-2xl lg:text-3xl text-white'>
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.div>
      );
    };