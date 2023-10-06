import ThemeContext from "./context/ThemeContex";
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Hero from './components/Hero';

import useTheme from "./hooks/useTheme";

import './App.css'; 

export default function App() {

  return (
    <ThemeContext>
      <AppSections />
    </ThemeContext>
  )
}

export function AppSections() {
  const { theme } = useTheme();

  return (
    <div 
      className={`
        h-screen overflow-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-teal-600
        ${theme === 'dark' ? "bg-[#333333] text-[#F5F5F5]" : "bg-[#e5e5e5] text-[#18181b]"}
      `}
    >
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