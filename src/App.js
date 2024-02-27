import React from "react";
import Home from "./components/Home.js";
import Skills from "./components/Skills.js";
import Project from "./components/Projects.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";
import About from "./components/About.js";
import Header from "./components/Header.js";


const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <About/>
      <Skills />
      <Project />
      <Contact />
      
      <Footer />

    </div>
  );
};

export default App;
