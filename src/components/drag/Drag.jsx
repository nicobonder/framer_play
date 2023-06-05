import React from "react";
import { motion } from "framer-motion";

export default function Drag() {
  return (
    <section className='flex flex-col h-[50vh] sm:h-[60vh] p-2 bg-[#8a2be2]'>
      <h1 className='text-lg md:text-2xl font-bold'>
        ...but you can play with this one
      </h1>
      <motion.div className='w-full justify-center flex my-10'>
        <motion.div
          className='h-32 w-32 md:h-40 md:w-40 bg bg-[#48A167] place-items-center flex flex-col justify-center p-2'
          drag
          dragConstraints={{ left: -50, right: 50, top: 50, bottom: 50 }}
          dragElastic={0.2}
          dragSnapToOrigin={false}
          whileTap={{
            scale: 1.1,
            backgroundColor: "#7780ED",
            cursor: "grabbing",
          }}
        >
          <h3 className='text-white text-base md:text-lg font-bold'>DRAG & DROP</h3>
        </motion.div>
      </motion.div>
      <p className='text-sm md:text-base font-bold text-white mt-2'>It &apos;s not much fun with restrictions, is it?</p>
    </section>
  );
}

/*  <section className='section'>
        <motion.div>
            
        </motion.div>
    </section>*/
