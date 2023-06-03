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
    <section className='flex flex-col py-2 px-[1rem] h-[50vh] md:h-[55vh] bg-[#48A167] items-center'>
      <h1 className='text-lg text-center md:text-2xl lg:text-3xl font-bold mb-4'>
        Framer Motion allows you to animate father and children elements
      </h1>

      <div className='flex items-end'>
        <motion.ol
          className='flex gap-4 md:gap-12 items-end sm:mt-6 md:mt-8'
          variants={container}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true }}
        >
          <motion.li 
          variants={childVariants}
          >
            <img
              className='w-auto h-[30vh] md:h-[35vh]'
              src='/assets/homer.png'
              alt='homer Simpsons'
            />
          </motion.li>

          <motion.li
          variants={childVariants}
          >
            <img
              className='w-auto h-[25vh] md:h-[28vh]'
              src='/assets/bart.png'
              alt='bart'
            />
          </motion.li>

          <motion.li 
          variants={childVariants}
          >
            <img
              className='w-auto h-[22vh] md:h-[24vh]'
              src='/assets/lisa.png'
              alt='Lisa'
            />
          </motion.li>

          <motion.li 
          variants={childVariants}
          >
            <img
              className='w-auto h-[16vh] md:h-[20vh]'
              src='/assets/maggie.png'
              alt='maggie'
            />
          </motion.li>
        </motion.ol>
      </div>
    </section>
  );
}
