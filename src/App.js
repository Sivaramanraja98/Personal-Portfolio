import React from 'react';
import Navibar from './components/Navbar.js';
import About from './components/About.js';
import Skills from './components/Skills.js';
import Project from './components/Projects.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';

const App = () => {
  return (
    <div>
      <Navibar/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;