import React from 'react';
import Hero from './Hero';
import About from './About';
import Business from './Business';
import Resources from './Resources';
import Projects from './Projects';
import Sustainability from './Sustainability';
import Values from './Values';
import News from './News';
import CTA from './CTA';
import Contact from './Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Business />
      <Resources />
      <Projects />
      <Sustainability />
      <Values />
      <News />
      <CTA />
      <Contact />
    </main>
  );
}
