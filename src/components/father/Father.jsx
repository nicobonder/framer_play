import React from "react";
import { motion } from "framer-motion";

export default function Father() {
  const container = {
    hidden: {
      x: -100,
      opacity: 0,
      transition: { when: "beforeChildren" },
    },
    show: {
        x: 0,
        opacity: 1,
      transition: {
        staggerChildren: 0.65
      }
    }
  };

  const childVariants = {
    hidden: { x: -10, opacity: 0, transition: { duration: 2 } },
    show: {
      x: 0,
      opacity: 1,
      staggerChildren: 0.5,
    }
  };

  return (
    <section className='flex flex-col px-[1rem] h-[60vh] bg-[#48A167] items-center justify-center'>
      <h1 className='text-lg text-center md:text-2xl font-bold mb-4'>
        Framer Motion allows you to animate father and children elements
      </h1>

      <div className='flex gap-8 items-end'>
        <motion.ol
          className='flex gap-12 items-end'
          variants={container}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true }}
        >
          <motion.li 
          variants={childVariants}
          >
            <img
              className='w-32 h-34'
              src='/assets/homer.png'
              alt='homer Simpsons'
            />
          </motion.li>

          <motion.li
          variants={childVariants}
          >
            <img
              className='w-20 h-34'
              src='/assets/bart.png'
              alt='bart'
            />
          </motion.li>

          <motion.li 
          variants={childVariants}
          >
            <img
              className='w-20 h-34'
              src='/assets/lisa.png'
              alt='Lisa'
            />
          </motion.li>

          <motion.li 
          variants={childVariants}
          >
            <img
              className='w-20 h-34'
              src='/assets/maggie.png'
              alt='maggie'
            />
          </motion.li>
        </motion.ol>
      </div>
    </section>
  );
}
