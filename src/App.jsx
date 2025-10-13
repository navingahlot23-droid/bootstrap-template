import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import WebHeader from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Service from "./Components/Services";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // whether animation should happen only once
    });
  }, []);
  
  return (
    <>
      <WebHeader />
      <Hero/>
      <About/>
      <Service />
    </>
  )
}

export default App
