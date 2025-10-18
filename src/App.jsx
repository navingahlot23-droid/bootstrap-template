import React, { useEffect } from "react";

import Hero from './Components/Hero';
import About from './Components/About';
import Service from "./Components/Services";
import Header from "./Components/Header";
import Portfolio from "./Components/Portfolio";
import WhyUs from "./Components/WhyUs";
import Testimonials from "./Components/Testimonials";

import AOS from 'aos';
import 'aos/dist/aos.css';
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";
import PureCounter from "@srexi/purecounterjs/dist/purecounter_vanilla.js";
import 'swiper/css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // whether animation should happen only once
    });

    // Delay initialization slightly to ensure DOM is ready
    setTimeout(() => {
      new PureCounter();
    }, 100); // 100ms delay

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
      <Header />
      <Hero />
      <About />
      <Service />
      <Portfolio />
      <WhyUs />
      <Testimonials/>
    </>
  )
}

export default App
