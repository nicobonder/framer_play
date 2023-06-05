import Image from 'next/image'
import { Inter } from 'next/font/google'
import BeFree from '@/components/befree/BeFree'
import Drag from '@/components/drag/Drag'
import Bird from '@/components/bird/Bird'
import SquareCircle from '@/components/squareCircle/SquareCircle'
import Wheel from '@/components/wheel/Wheel'
import Father from '@/components/father/Father'
import Frontend from '@/components/frontend/Frontend'
import Magic from '@/components/magic/Magic'
import SlideShow from '@/components/slideshow/slideshow'
import ParallaxEffect from '@/components/parallax/Parallax'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <BeFree />
      <Drag />
      <Bird />
      <SlideShow />
      <SquareCircle />
      <Wheel />
      <Father />
      <Magic />
      <ParallaxEffect />
      {<Frontend /> }
    </main>
  )
}
