import React from "react";
import { motion } from "framer-motion";

export default function Wheel() {
  return (
    <section className='section bg-[#48A167]'>
      <motion.h1 className="text-lg md:text-2xl font-bold mb-8 text-center">Did you know that a square wheel can be rotated?</motion.h1>
      <motion.div
        className='h-40 w-40 bg bg-[#8a2be2] border border-white border-2 place-items-center flex flex-col justify-center'
        initial={{ x: 0, opacity: 0.5, rotate: 0 }}
        whileInView={{ x: '80vw', opacity: 1, rotate: 360 }}
        transition={{ duration: 2.5, type: "tween" }}
        viewport={{ once: true }}
      ></motion.div>
    </section>
  );
}
