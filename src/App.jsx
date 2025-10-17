import React, { useEffect } from "react";
import Hero from './Components/Hero';
import About from './Components/About';
import AOS from 'aos';
import 'aos/dist/aos.css';
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";
import Service from "./Components/Services";
import Header from "./Components/Header";
import Portfolio from "./Components/Portfolio";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // whether animation should happen only once
    });

    const lightbox = GLightbox({
      selector: ".glightbox", // CSS selector for links
      touchNavigation: true,
      loop: true,
      zoomable: true,
    });
    return () => {
      lightbox.destroy(); // cleanup on unmount
    };
  }, []);

  
  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Service />
      <Portfolio />
    </>
  )
}

export default App
