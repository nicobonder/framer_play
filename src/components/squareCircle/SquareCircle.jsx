import React from "react";
import { motion, useAnimation, useAnimattion } from "framer-motion";

export default function SquareCircle() {
  const control = useAnimation();

  return (
    <section className='pt-4 bg-[#8a2be2] h-[60vh] px-[1rem]'>
      <motion.div
        className='py-1 bg-[#48A167] w-[30%]'
        initial={{ scale: 1.25, x: 300, opacity: 0 }}
        whileInView={{ scale: 1, x: 0, opacity: 1 }}
        transition={{ duration: 1, type: "tween" }}
        viewport={{ once: true }}
      >

        <motion.h1
          className='text-lg md:text-2xl font-bold mb-1 text-center'
          initial={{ scale: 1.25, x: -300, opacity: 0 }}
          whileInView={{ scale: 1, x: 0, opacity: 1 }}
          transition={{ duration: 1, type: "tween" }}
          viewport={{ once: true }}
        >
          Do you want to play with buttons?
        </motion.h1>
        <motion.h2
          className='text-md md:text-xl font-bold mb-1 text-white text-center'
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
                className="w-36 h-10 border px-1 bg-[#48A167] text-white font-bold text-xs sm:text-md md:text-lg md:font-normal
               hover:text-[#48A167] hover:bg-blue-100 hover:shadow-[0_35px_60px_-5px_rgba(255,255,255,0.3)] transition duration-300 ease-in-out"
                onClick={() => {
                control.start({
                    x: '30vw',
                    transition: { duration: 2}
                })
            }}>Move Right</button>
               <button
                className="w-36 h-10 border px-1 bg-[#48A167] text-white font-bold text-xs sm:text-md md:text-lg md:font-normal
               hover:text-[#48A167] hover:bg-blue-100 hover:shadow-[0_35px_60px_-5px_rgba(255,255,255,0.3)] transition duration-300 ease-in-out"
                onClick={() => {
                control.start({
                    x: '0%',
                    transition: { duration: 2}
                })
            }}>Back Left</button>
               <button
               className="w-36 h-10 border px-1 bg-[#48A167] text-white font-bold text-xs sm:text-md md:text-lg md:font-normal
               hover:text-[#48A167] hover:bg-blue-100 hover:shadow-[0_35px_60px_-5px_rgba(255,255,255,0.3)] transition duration-300 ease-in-out"
               onClick={() => {
                control.start({
                    borderRadius: '50%',
                    transition: { duration: 2}
                })
            }}>Circle It!</button>
               <button
               className="w-36 h-10 border px-1 bg-[#48A167] text-white font-bold text-xs sm:text-md md:text-lg md:font-normal
               hover:text-[#48A167] hover:bg-blue-100 hover:shadow-[0_35px_60px_-5px_rgba(255,255,255,0.3)] transition duration-300 ease-in-out" 
               onClick={() => {
                control.start({
                    borderRadius: '0%',
                    transition: { duration: 2}
                })
            }}>Square It!</button>
            <button
               className="w-36 h-10 border px-1 bg-[#48A167] text-white font-bold text-xs sm:text-md md:text-lg md:font-normal
               hover:text-[#48A167] hover:bg-blue-100 hover:shadow-[0_35px_60px_-5px_rgba(255,255,255,0.3)] transition duration-300 ease-in-out" 
               onClick={() => {
                control.stop()
            }}>Stop Animation</button>
        </motion.div>
      <motion.div className='w-full justify-center flex mb-10'>
        <motion.div
          className='h-40 w-40 bg bg-[#48A167] place-items-center flex flex-col justify-center'
          animate={control}
        >
          <h3 className='text-white text-lg font-bold'>MOVE IT!</h3>
        </motion.div>
      </motion.div>
    </section>
  );
}
