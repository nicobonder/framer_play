import React from "react";
import { motion, useAnimation, useAnimattion } from "framer-motion";

export default function SquareCircle() {
  const control = useAnimation();

  return (
    <section className='flex flex-col justify-center pt-6 sm:pt-1 bg-[#48A167] h-[60vh] md:h-[80vh] px-[1rem]'>
      <motion.div
        className='py-1 px-1 bg-[#8a2be2] w-[70%] md:w-[35%] mb-2 lg:mb-8'
        initial={{ scale: 1.25, x: 100, opacity: 0 }}
        whileInView={{ scale: 1, x: 0, opacity: 1 }}
        transition={{ duration: 1, type: "tween" }}
        viewport={{ once: true }}
      >

        <motion.h1
          className='text-md md:text-2xl font-bold mb-1 text-center'
          initial={{ scale: 1.25, x: -300, opacity: 0 }}
          whileInView={{ scale: 1, x: 0, opacity: 1 }}
          transition={{ duration: 1, type: "tween" }}
          viewport={{ once: true }}
        >
          Do you want to play with buttons?
        </motion.h1>
        <motion.h2
          className='text-sm md:text-xl font-bold mb-1 text-white text-center'
          initial={{ scale: 1.25, x: -300, opacity: 0 }}
          whileInView={{ scale: 1, x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4, type: "tween" }}
          viewport={{ once: true }}
        >
          Everyone loves to play with buttons.
        </motion.h2>
      </motion.div>
      <motion.div 
        className="flex justify-center my-8"
      >
            <button 
                className="w-36 h-10 border px-1 bg-[#8a2be2] text-white font-bold text-xs sm:text-md md:text-lg md:font-normal
               hover:text-[#8a2be2] hover:bg-blue-100 hover:shadow-[0_35px_60px_-5px_rgba(255,255,255,0.3)] transition duration-300 ease-in-out"
                onClick={() => {
                control.start({
                    x: '30vw',
                    transition: { duration: 1.5}
                })
            }}>Move Right</button>
               <button
                className="w-36 h-10 border px-1 bg-[#8a2be2] text-white font-bold text-xs sm:text-md md:text-lg md:font-normal
               hover:text-[#8a2be2] hover:bg-blue-100 hover:shadow-[0_35px_60px_-5px_rgba(255,255,255,0.3)] transition duration-300 ease-in-out"
                onClick={() => {
                control.start({
                    x: '0%',
                    transition: { duration: 1.5}
                })
            }}>Back Left</button>
               <button
               className="w-36 h-10 border px-1 bg-[#8a2be2] text-white font-bold text-xs sm:text-md md:text-lg md:font-normal
               hover:text-[#8a2be2] hover:bg-blue-100 hover:shadow-[0_35px_60px_-5px_rgba(255,255,255,0.3)] transition duration-300 ease-in-out"
               onClick={() => {
                control.start({
                    borderRadius: '50%',
                    transition: { duration: 1.5}
                })
            }}>Circle It!</button>
               <button
               className="w-36 h-10 border px-1 bg-[#8a2be2] text-white font-bold text-xs sm:text-md md:text-lg md:font-normal
               hover:text-[#8a2be2] hover:bg-blue-100 hover:shadow-[0_35px_60px_-5px_rgba(255,255,255,0.3)] transition duration-300 ease-in-out" 
               onClick={() => {
                control.start({
                    borderRadius: '0%',
                    transition: { duration: 1.5}
                })
            }}>Square It!</button>
            <button
               className="w-36 h-10 border px-1 bg-[#8a2be2] text-white font-bold text-xs sm:text-md md:text-lg md:font-normal
               hover:text-[#8a2be2] hover:bg-blue-100 hover:shadow-[0_35px_60px_-5px_rgba(255,255,255,0.3)] transition duration-300 ease-in-out" 
               onClick={() => {
                control.stop()
            }}>Stop Animation</button>
        </motion.div>
      <motion.div className='w-full justify-center flex mb-10'>
        <motion.div
          className='h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 lg:mt-8 bg-[#8a2be2] place-items-center flex flex-col justify-center'
          animate={control}
        >
          <h3 className='text-white text-lg font-bold'>MOVE IT!</h3>
        </motion.div>
      </motion.div>
    </section>
  );
}
