import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import SEO from './Components/SEO';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Services from './Components/Services';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './Style.css';

function App() {
  return (
    <HelmetProvider>
      <SEO 
        title="Chandan Kumar | Frontend Developer Portfolio"
        description="Showcasing my expertise in React.js, frontend development, and interactive web applications."
        keywords="React.js, Frontend Developer, Web Development, Portfolio, JavaScript"
      />
      <div className="App">
        <NavBar />
        <Home />
        <Services />
        <Projects />
        <Skills />
        <About />
        <Contact />
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
