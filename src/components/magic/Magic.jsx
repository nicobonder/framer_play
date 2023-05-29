import { useAnimation } from "framer-motion";
import React from "react";
import { motion } from "framer-motion";

export default function Magic() {
    const control = useAnimation();

  return (
    <section className='px-[1rem] py-[1rem] h-[60vh] bg-[#8a2be2]'>
      <h1 className='text-lg md:text-2xl font-bold mb-4'>Do you like magic?</h1>
      <div className="flex justify-between w-[80%] mx-auto">
        <img className='w-40 h-50 justify-start' src='/assets/hermione.png' alt='hermione' />
        <motion.div 
        animate={control}
        className="w-[30%] h-2 bg-[#48A167] my-auto"></motion.div>
        <img className='w-40 h-50 justify-end' src='/assets/voldemort.png' alt='homer' />
      </div>
      <div className="flex justify-center">
        <button 
        onClick={() => {
            control.start({
                x: '30vw',
                transition: { duration: 2}
                })
            }}
        className="w-40 h-10 border border-white text-lg text-white font-bold">Avada Kedavra</button>

      </div>
    </section>
  );
}
