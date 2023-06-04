import React, { useEffect, useState } from "react";
import { AnimatePresence, easeIn, useAnimation } from "framer-motion";
import { motion } from "framer-motion";

export default function Magic() {
    const [show, setShow] = useState(true);
    const control = useAnimation();
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
 // Agregar un event listener para manejar el cambio de tamaño de la ventana
 window.addEventListener("resize", handleResize);

 // Obtener el ancho de la pantalla al cargar la página
 setWindowWidth(window.innerWidth);

 // Limpiar el event listener cuando el componente se desmonte
 return () => {
   window.removeEventListener("resize", handleResize);
 };
}, []);

console.log(windowWidth);

const variants = {
  visible: windowWidth => {
    if(windowWidth < 560) {
      return {
        x: -100,
        opacity: 0,
        width: 0
      }
    } else if (windowWidth >= 560 && windowWidth < 640) {
      return {
        x: -200,
        opacity: 0,
        width: 0
      }
    }
    else if (windowWidth >= 640 && windowWidth < 768) {
      return {
        x: -210,
        opacity: 0,
        width: 0
      }
    }
    else if (windowWidth >= 768 && windowWidth < 840) {
      return {
        x: -250,
        opacity: 0,
        width: 0
      }
    } else if (windowWidth >= 840 && windowWidth < 1024) {
      return {
        x: -300,
        opacity: 0,
        width: 0
      }
    } else if (windowWidth >= 1024) {
      return {
        x: -320,
        opacity: 0,
        width: 0
      }
    }
  },
  hidden: windowWidth => {
    if(windowWidth < 560) {
      return {
        x: 20,
        opacity: 0.8,
        width: 40,
        transition: {
          x: {duration: 1, ease: easeIn }
        }
      }
  } else if (windowWidth >= 560 && windowWidth < 640) {
    return {
      x: 200,
      opacity: 0.8,
      width: 80,
      transition: {
        x: {duration: 1, ease: easeIn }
      }
    }
  } else if (windowWidth >= 640 && windowWidth < 768) {
    return {
      x: 210,
      opacity: 0.8,
      width: 80,
      transition: {
        x: {duration: 1, ease: easeIn }
      }
    }
  } else if (windowWidth >= 768 && windowWidth < 840) {
    return {
      x: 250,
      opacity: 0.8,
      width: 80,
      transition: {
        x: {duration: 1, ease: easeIn }
      }
    }
  } else if (windowWidth >= 840 && windowWidth < 1024) {
    return {
      x: 300,
      opacity: 0.8,
      width: 80,
      transition: {
        x: {duration: 1, ease: easeIn }
      }
    }
  } else if (windowWidth >= 1024) {
    return {
      x: 300,
      opacity: 0.8,
      width: 80,
      transition: {
        x: {duration: 1, ease: easeIn }
      }
    }
  }
},
exit: windowWidth => {
  if(windowWidth < 560) {
    return {
      x: 120,
      opacity: 1,
      width: 40,
      transition: {
        x: {duration: 1, ease: easeIn }
      }
    }
}else if (windowWidth >= 560 && windowWidth < 640) {
  return {
    x: 200,
    opacity: 1,
    width: 80,
    transition: {
      x: {duration: 1, ease: easeIn }
    }
  }
}
else if (windowWidth >= 640 && windowWidth < 768) {
  return {
    x: 210,
    opacity: 1,
    width: 80,
    transition: {
      x: {duration: 1, ease: easeIn }
    }
  }
}
else if (windowWidth >= 768 && windowWidth < 840) {
  return {
    x: 250,
    opacity: 1,
    width: 80,
    transition: {
      x: {duration: 1, ease: easeIn }
    }
  }
}
else if (windowWidth >= 840 && windowWidth < 1024) {
  return {
    x: 300,
    opacity: 1,
    width: 80,
    transition: {
      x: {duration: 1, ease: easeIn }
    }
  }
} else if (windowWidth >= 1024) {
  return {
    x: 300,
    opacity: 1,
    width: 80,
    transition: {
      x: {duration: 1, ease: easeIn }
    }
  }
}
}

}

  return (
    <section className='px-[1rem] py-[1rem] h-[70vh] md:h-[60vh] bg-[#8a2be2]'>
      <h1 className='text-lg md:text-2xl font-bold mb-4'>Do you like magic?</h1>

      <div className="flex justify-between w-[100%] lg:w-[940px]
       md:mx-auto mb-12 px-1 md:px-4 lg:px-16">
        <img className='w-36 h-54 flex justify-start' src='/assets/hermione.png' alt='Hermione' />

          <AnimatePresence>
            { show && <motion.div
              // animate={{ width: 0, opacity: 1, x: -250 }}
              // initial={{ width: 80, opacity: 0.8, x: 200 }}
              // exit= {{width: 80, opacity: 1, x: 200 }}
              // transition={{ duration: 1, ease: easeIn, ease: 'linear' }}
              variants={variants}
              animate='visible'
              initial='hidden'
              exit='exit'
              className="h-2 bg-[#48A167] my-auto"
              custom={windowWidth}
              >
              </motion.div>}

          </AnimatePresence>

          <AnimatePresence>
            { show && <motion.img className='h-48 flex justify-end' src='/assets/voldemort.png' alt='Voldemort'
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit= {{width: 0, opacity: 0, x: 0}}
              transition={{ delay: 1, duration: 0.5 }}
              // variants={variants}
              // animate='visible'
              // initial='hidden'
              // exit='exit'
              // custom={windowWidth}
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
