import React from 'react'
import { motion } from "framer-motion"

export default function BeFree() {
  return (
    <section className='section  bg-[#48A167]'>
        <motion.div
            className='h-80 w-[33%] bg-[#8a2be2] place-items-center flex flex-col justify-center'
           
            animate={{ opacity: [0.5, 1 ], x: ['-100%', '200%']}}
            transition={{ duration: 2, ease: 'easeInOut' }}
        >
            <motion.p
                className='text-white text-center text-lg font-bold pt-2'
            >I'm going to start moving every time the page loads </motion.p>
            <br />
             <motion.p
                className='text-white text-center text-lg font-bold'
            >and you can't do anything to stop it...</motion.p>
        </motion.div>
    </section>
  )
}
