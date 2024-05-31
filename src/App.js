import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import './Style.css'
function App() {
  return (
    <div className="App">
      <NavBar />
      <Home/>
    </div>
  );
}

export default App;
