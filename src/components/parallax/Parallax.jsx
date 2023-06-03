import React, { useEffect } from "react";
import { motion, useTransform, useMotionValue, useScroll } from "framer-motion";

export default function ParallaxEffect() {
    const { scrollYProgress } = useScroll()

    const xLeft = useTransform(scrollYProgress, [0, 1], [1000, -400]);
    const yLeft = useTransform(scrollYProgress, [0, 1], [0, 100]);

    const xRight = useTransform(scrollYProgress, [0, 1], [-100, 100]);
    const yRight = useTransform(scrollYProgress, [0, 1], [1200, -400]);

//   useEffect(() => {
//     const handleScroll = () => {
//         scrollY.set(window.scrollY);
//       };
  
//       window.addEventListener("scroll", handleScroll);
  
//       return () => {
//         window.removeEventListener("scroll", handleScroll);
//       };
//     }, [scrollY]);

  return (
    <div
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80")',
        
      }}
      className="sticky top-0 flex min-h-[70vh] items-center justify-center overflow-hidden -z-10 bg-cover bg-center bg-no-repeat"
    >
      <div
        style={{
          height: "110vh",
          display: "flex",
          position: "sticky",
          top: "0px",
        }}
      >
        <motion.div
          className="parallaxcChild"
          style={{
            height: "70%",
            width: "50vw",
          }}
        >
          <motion.h2
          style={{ x: xLeft, y: yLeft }}
          className="p-4 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-100 text-lg sm:text-2xl mb-24 ml-8 lg:ml-4 lg:text-3xl text-white font-bold">PARALLAX EFFECT</motion.h2>
        </motion.div>
        
        <motion.div
          className="parallaxcChild"
          style={{
            height: "70%",
            width: "50vw",
          }}
        >
          <motion.img
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          style={{ x: xRight, y: yRight }}
            className="w-[80%] md:w-[50%] h-auto mr-12 lg:mr-2 backdrop-blur-xl" 
            
            />
         
        </motion.div>
      </div>
    </div>
  );
}
