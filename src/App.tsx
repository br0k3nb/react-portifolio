import { useState } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'

import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-[#363636] text-white h-screen snap-y snap-proximity overflow-scroll">
      <Navbar />

      <section id='about'>
        <Hero />
      </section>

    </div>
  )
}