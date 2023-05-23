import { useState, createContext } from "react";

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

import { ThemeProvider } from 'styled-components';

import GlobalStyle from "../styles/global";
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';
import { Container } from './style';

import '../App.css'; 

export const ThemeCtx = createContext<any>(null);

export default function App() {
  const [ theme, setTheme ] = useState('dark');

  return (
    <ThemeProvider theme={ theme === "dark" ? dark : light }>
      <GlobalStyle />
      <ThemeCtx.Provider value={{ theme, setTheme }}>
        <Container className='h-screen overflow-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-teal-600'>
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
        </Container>
      </ThemeCtx.Provider>
    </ThemeProvider>
  )
}