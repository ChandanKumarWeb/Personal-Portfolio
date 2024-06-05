import React from 'react';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Services from './Components/Services';
import Projects from './Components/Projects';
import './Style.css'
function App() {
  return (
    <div className="App">
      <NavBar />
      <Home/>
      <Services/>
      <Projects/>
    </div>
  );
}

export default App;
