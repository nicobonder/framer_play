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
      // scale: 0.5,
    }
  },
  visible: {
    x: 0,
    opacity: 1,
    // scale: 1,
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
      // scale: 0.5,
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
    setDirection(1)
    if (index === images.length - 1) {
      setIndex(0)
      return
    }
    setIndex(index + 1)
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
    <div className='flex flex-col h-[100%] bg-[#8a2be2] py-2'>
        <h1 className='text-lg md:text-2xl font-bold mb-4 text-center'>Framer Motion Slideshow</h1>
      <div className='mx-auto my-auto w-[60%] relative overflow-hidden rounded-2xl'
        style={{ aspectRatio: 'calc(16 / 9)' }}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            variants={variants}
            animate='visible'
            initial='hidden'
            exit='exit'
            src={images[index]}
            alt='slides'
            className='slides'
            key={images[index]}
            custom={direction}
          />
        </AnimatePresence>
        <button className='slideBtn prevButton' onClick={prevStep}>
        <svg style={{color: "white"}} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-chevron-compact-left" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z" fill="white"></path> </svg>
        </button>
        <button className='slideBtn nextButton' onClick={nextStep}>
        <svg style={{color: "white"}} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-chevron-compact-right" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z" fill="white"></path> </svg>
        </button>
      </div>
    </div>
  )
}
