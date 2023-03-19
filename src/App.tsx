import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

import './App.css'

export default function App() {
  return (
    <div className="bg-[#363636] text-white h-screen overflow-scroll z-0 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-teal-600">
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

      <Footer />

    </div>
  )
}