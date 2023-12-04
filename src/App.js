import React from "react";
import Navibar from "./components/Navbar.js";
import Home from "./components/Home.js";
import Skills from "./components/Skills.js";
import Project from "./components/Projects.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";
import About from "./components/About.js";

const App = () => {
  return (
    <div>
      <Navibar />
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
