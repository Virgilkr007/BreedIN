import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Approach from './components/Approach';
import Sectors from './components/Sectors';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Problem />
      <Approach />
      <Sectors />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
