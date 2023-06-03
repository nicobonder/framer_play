import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const images = [
  'https://timmousk.com/wp-content/uploads/2022/03/2-2.webp',
  'https://timmousk.com/wp-content/uploads/2022/03/1-2.webp',
  'https://miro.medium.com/v2/resize:fit:828/format:webp/1*rf4QAy4yYPdfuLsZ7NrHZA.jpeg',
  'https://res.cloudinary.com/practicaldev/image/fetch/s--wEvf47IA--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/h2i301hyanh9kohznvke.png',
  'https://i.imgur.com/bnvfvjk.png'
]

const variants = {
  hidden: direction => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
  visible: {
    x: 0,
    opacity: 1,
    // transition: 'ease-in',
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  },
  exit: direction => {
    return {
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      // transition: 'ease-in',
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    }
  },
}

 export default function SlideShow() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  function nextStep() {
    setDirection(1) // x moves + 1000
    if (index === images.length - 1) { //if we are in the last picture
      setIndex(0) //we move to picture 0 when click on the button
      return
    }
    setIndex(index + 1) //if it is not the last one, index increase 1 and move to next picture
  }

  function prevStep() { 
    setDirection(-1)
    if (index === 0) {
      setIndex(images.length - 1)
      return
    }
    setIndex(index - 1)
  }

  return (
    <section className='flex flex-col h-[60vh] sm:h-[80vh] md:h-[100vh] bg-[#8a2be2] pt-2 pb-4'>
        <h1 className='text-lg sm:text-2xl lg:text-3xl font-bold mb-4 text-center pt-4'>Framer Motion Slideshow</h1>
      <div className=' flex justify-center mx-auto my-auto w-[90%] md:w-[85%] lg:w-[67%] relative overflow-hidden rounded-2xl'
        style={{ aspectRatio: 'calc(16 / 9)' }}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            variants={variants}
            animate='visible'
            initial='hidden'
            exit='exit'
            src={images[index]} //index change with functions applied in buttons
            alt='slides'
            className='slides'
            key={images[index]}
            custom={direction} //we need this custom prop to make it move in one direction or another
          />
        </AnimatePresence>
        <button className='slideBtn prevButton' onClick={prevStep}>
        <svg className='svgSlide' style={{color: "white"}} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-chevron-compact-left" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z" fill="white"></path> </svg>
        </button>
        <button className='slideBtn nextButton' onClick={nextStep}>
        <svg className='svgSlide' style={{color: "white"}} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-chevron-compact-right" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z" fill="white"></path> </svg>
        </button>
      </div>
    </section>
  )
}
