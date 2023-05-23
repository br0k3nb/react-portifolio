import { useState } from "react";

import ThemeContext from "../context/ThemeContex";
import Projects from '../components/Projects';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import About from '../components/About';
import Hero from '../components/Hero';

import { ThemeProvider } from 'styled-components';

import GlobalStyle from "../styles/global";
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';
import { Container } from './style';

import '../App.css'; 

export default function App() {
  const themeLocalStorage = localStorage.getItem("theme");
  const [ theme, setTheme ] = useState(themeLocalStorage ? themeLocalStorage : "dark");

  return (
    <ThemeProvider theme={ theme === "dark" ? dark : light }>
      <GlobalStyle />
      <ThemeContext theme={theme} setTheme={setTheme}>
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
      </ThemeContext>
    </ThemeProvider>
  )
}