import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';

import './App.css'

export default function App() {
  return (
    <div className="bg-[#363636] text-white h-screen overflow-scroll">
      <Navbar />

      <section id='main'>
        <Hero />
      </section>

      <section id='about'>
        <About />
      </section>

      <section id='projects'>
        <Projects />
      </section>

    </div>
  )
}