import React from 'react';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Services from './Components/Services';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './Style.css'
function App() {
  return (
    <div className="App">
      <NavBar />
      <Home/>
      <Services/>
      <Projects/>
      <Skills/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
