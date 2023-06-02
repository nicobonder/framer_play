import React from "react";
import { motion } from "framer-motion";

export default function Drag() {
  return (
    <section className='flex flex-col justify-center section bg-[#8a2be2]'>
      <h1 className='text-lg md:text-2xl font-bold mb-1'>
        ...but you can play with this one
      </h1>
      <motion.div className='w-full justify-center flex mb-10'>
        <motion.div
          className='h-40 w-40 bg bg-[#48A167] place-items-center flex flex-col justify-center'
          drag
          dragConstraints={{ left: -50, right: 50, top: 50, bottom: 50 }}
          dragElastic={0.2}
          dragSnapToOrigin={false}
          whileTap={{
            scale: 1.2,
            backgroundColor: "#7780ED",
            cursor: "grabbing",
          }}
        >
          <h3 className='text-white text-lg font-bold'>DRAG & DROP</h3>
        </motion.div>
      </motion.div>
      <p className='text-sm md:text-base font-bold text-white mt-2'>It's not much fun with restrictions, is it?</p>
    </section>
  );
}

/*  <section className='section'>
        <motion.div>
            
        </motion.div>
    </section>*/
