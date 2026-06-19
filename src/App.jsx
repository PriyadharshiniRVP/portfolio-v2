import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Hero from './Components/Hero'
import About from './Components/About'
import Footer from './Components/Footer'
import Experience from './Components/Experience'
import Projects from './Components/Projects'
import Navbar from './Components/Navbar'
import Social from './Components/Socials'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return(
    <>
    <Navbar/>
    <Social/>
    <Hero/>
    <About/>
    <Experience/>
    <Projects/>
    <Footer/>
     
     
     


     </>
   

  );

}
  

export default App
