import React from 'react'
import { motion } from "framer-motion"

export default function BeFree() {
  return (
    <section className='section bg-[#48A167] items-center flex justify-center'>
        <motion.div
            className='h-50 md:h-52 lg:h-70 w-[33%] lg:w-[25%] bg-[#8a2be2] items-center flex flex-col justify-center px-1 py-1'
           
            animate={{ opacity: [0.5, 1 ], x: ['-150%', '100%']}}
            transition={{ duration: 2, ease: 'easeInOut' }}
        >
            <motion.p
                className='text-white text-center text-sm md:text-lg font-bold pt-2'
            >I&apos;m going to start moving every time the page loads </motion.p>
            <br />
             <motion.p
                className='text-white text-center text-sm md:text-lg font-bold pt-2'
            >and you can&apos;t do anything to stop it...</motion.p>
        </motion.div>
    </section>
  )
}
