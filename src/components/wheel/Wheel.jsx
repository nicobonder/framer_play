import React from "react";
import { motion, useAnimation } from "framer-motion";


export default function Wheel() {
  const control = useAnimation();

  const handleRotate = () => {
    control.start({
      rotate: 360,
      opacity: 1,
      x: '80vw',
      transition: { duration: 2 }
    });
  };

  const handleBack = () => {
    control.start({
      rotate: 0,
      opacity: 0.8,
      x: 0,
      transition: { duration: 2 }
    });
  };

  return (
    <section className='h-[40vh] md:h-[55vh] lg:h-[60vh] p-2 md:px-4 bg-[#8a2be2]'>
      <motion.h1 className="text-lg pt-2 md:text-2xl lg:text-3xl font-bold md:mb-8 text-center wheelTitle"
        
      >Did you know that a square wheel can be rotated?</motion.h1>

         <motion.div 
              className="h-14 sm:h-20 md:h-28 lg:h-40 w-14 sm:w-20 md:w-28 lg:w-40 bg-[#48A167] my-8 md:my-12 lg:my-10"
              animate={control}
              >
              </motion.div>
          <div className="flex justify-center">
        <div className="mt-1 flex gap-4">
        <button  
          className="w-20 h-8 md:w-40 md:h-10 border border-white text-lg text-white font-bold"
        onClick={handleRotate}
            >ROTATE
        </button>
        <button  
          className="w-20 h-8 md:w-40 md:h-10 border border-white text-lg text-white font-bold"
          onClick={() => {
            control.stop()}}
            >STOP
        </button>
        <button  
          className="w-20 h-8 md:w-40 md:h-10 border border-white text-lg text-white font-bold"
        onClick={handleBack}
            >BACK
        </button>
        </div>


      </div>
    </section>
  );
}
