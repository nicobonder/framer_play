import React, { useState } from "react";
import { AnimatePresence, useAnimation } from "framer-motion";
import { motion } from "framer-motion";

export default function Magic() {
    const [show, setShow] = useState(true);
    const control = useAnimation();

  return (
    <section className='px-[1rem] py-[1rem] h-[60vh] bg-[#8a2be2]'>
      <h1 className='text-lg md:text-2xl font-bold mb-4'>Do you like magic?</h1>
      <div className="flex justify-between w-[80%] mx-auto">
        <img className='w-40 h-50 justify-start' src='/assets/hermione.png' alt='Hermione' />
        
          <AnimatePresence>
            { show && <motion.div 
              animate={{ width: 0, opacity: 1, x: -500 }}
              initial={{ width: 180, opacity: 0.8, x: 400 }}
              exit= {{width: 80, opacity: 1, x: 405}}
              transition={{ duration: 1 }}
              className="h-2 bg-[#48A167] my-auto"
              >
              </motion.div>}

          </AnimatePresence>
      
          <AnimatePresence>
            { show && <motion.img className='h-50 justify-end' src='/assets/voldemort.png' alt='Voldemort'
              initial={{ width: 200, opacity: 1 }}
              animate={{ width: 200, opacity: 1 }}
              exit= {{width: 0, opacity: 0, x: 0}}
              transition={{ delay: 1, duration: 0.5 }}
              >
              </motion.img>}
              </AnimatePresence>

        {/* <img className='w-40 h-50 justify-end' src='/assets/voldemort.png' alt='homer' /> */}
      </div>
      <div className="flex justify-center">
        <button onClick={() => setShow(!show)}
        className="w-40 h-10 border border-white text-lg text-white font-bold">{show ? "Avada Kedavra" : "AGAIN!" }
          
        </button>

      </div>
    </section>
  );
}
