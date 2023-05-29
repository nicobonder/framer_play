import React from "react";
import { motion } from "framer-motion";

export default function Bird() {
  return (
    <section className='px-[1rem] h-[80vh] bg-[#48A167] py-[1rem]'>
      <div className="">
        <h1 className='text-lg md:text-2xl font-bold mb-1'>
          Ok, now you can fell free
        </h1>
        <h2 className='text-md md:text-xl font-bold mb-1'>
          Do you dare to make it land on the branch{" "}
          <span className='text-white'>(without touching the eagle)</span> ?
        </h2>
      </div>
    <div  className='flex justify-center'>
    <motion.img
          src='/assets/eagle.png'
          alt='An eagle attacking the bird'
          className='h-64 w-64 mt-2 ml-24'
          drag
          whileTap={{
            cursor: "grabbing",
          }}
        />
    </div>
      <div className='flex justify-between -mt-14'>
        <motion.img
          src='/assets/bird.png'
          alt='A bird that you can move'
          className='h-48 w-48 justify-start'
          drag
          whileTap={{
            cursor: "grabbing",
          }}
        />
        <img
          src='/assets/branch.png'
          alt='A branch'
          className='h-64 w-58 justify-end'
        />
      </div>
    </section>
  );
}
