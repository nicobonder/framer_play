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
        staggerChildren: 0.6
      }
    }
  };

  const childVariants = {
    hidden: { x: -10, opacity: 0, transition: { duration: 2 } },
    show: {
      x: 0,
      opacity: 1,
      staggerChildren: 0.4,
    }
  };

  return (
    <section className='px-[1rem] py-[1rem] h-[60vh] bg-[#48A167]'>
      <h1 className='text-lg md:text-2xl font-bold mb-4'>
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
