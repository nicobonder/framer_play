import Image from 'next/image'
import { Inter } from 'next/font/google'
import BeFree from '@/components/befree/BeFree'
import Drag from '@/components/drag/Drag'
import Bird from '@/components/bird/Bird'
import SquareCircle from '@/components/squareCircle/SquareCircle'
import Wheel from '@/components/wheel/Wheel'
import Father from '@/components/father/Father'
import Frontend from '@/components/frontend/Frontend'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <BeFree />
      <Drag />
      <Bird />
      <SquareCircle />
      <Wheel />
      <Father />
      <Frontend />
    </main>
  )
}
