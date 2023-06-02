import React, { useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";


export default function Wheel() {
  // const [show, setShow] = useState(true);
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
    <section className='section bg-[#8a2be2]'>
      <motion.h1 className="text-lg md:text-2xl font-bold mb-8 text-center wheelTitle"
        
      >Did you know that a square wheel can be rotated?</motion.h1>

         <motion.div 
              className="h-36 w-36 bg-[#48A167] my-8"
              animate={control}
              >
              </motion.div>
          <div className="flex justify-center">
        <div className="mt-1 flex gap-4">
        <button  
          className="w-40 h-10 border border-white text-lg text-white font-bold"
        onClick={handleRotate}
            >ROTATE
        </button>
        <button  
          className="w-40 h-10 border border-white text-lg text-white font-bold"
          onClick={() => {
            control.stop()}}
            >STOP
        </button>
        <button  
          className="w-40 h-10 border border-white text-lg text-white font-bold"
        onClick={handleBack}
            >BACK
        </button>
        </div>


      </div>
    </section>
  );
}
