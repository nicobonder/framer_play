import React from "react";
import { motion } from "framer-motion";

export default function Bird() {
  return (
    <section className='px-[1rem] h-[100vh] bg-[#48A167] py-[1rem]'>
      <div className="">
        <h1 className='text-lg md:text-2xl lg:text-3xl font-bold mb-1'>
          Ok, now you can fell free
        </h1>
        <h2 className='text-md md:text-xl font-bold mb-1'>
          Do you dare to make it land on the branch{" "}
          <span className='text-white'>(without touching the eagle)</span> ?
        </h2>
      </div>
    
    <div className='flex justify-center mt-8 md:mt-4'>
    <motion.img
          src='/assets/eagle.png'
          alt='An eagle attacking the bird'
          className='h-36 md:h-48 lg:h-60 md:w-48 w-36 lg:w-60 mt-4 lg:ml-24'
          drag
          whileTap={{
            cursor: "grabbing",
          }}
        />
    </div>

      <div className='flex justify-between mt-20 md:mt-4 lg:-mt-14'>
        <motion.img
          src='/assets/bird.png'
          alt='A bird that you can move'
          className='h-28 w-28 md:h-36 lg:h-40 md:w-36 lg:w-40 justify-start'
          drag
          whileTap={{
            cursor: "grabbing",
          }}
        />
        <img
          src='/assets/branch.png'
          alt='A branch'
          className='h-40 md:h-52 lg:h-64 w-36 md:w-52 lg:w-58 justify-end'
        />
      </div>
    </section>
  );
}
