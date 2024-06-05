import React ,{useState} from 'react'
import { Link } from 'react-scroll'
import '../Style.css'
function Navbar() {
    const[nav,setNav]=useState(false);
    const changeBackground = () =>{
        if (window.scrollY >=50){
            setNav(true);
        }
        else{
            setNav(false);
        }
    }
    window.addEventListener('scroll', changeBackground);
  return (
    <nav className={nav ? "nav active" : "nav"}>
        <Link to='#' className='logo'smooth={true} duration={2000}>
            <span>PORT</span>FOLIO.
        </Link>
        <input className='menu-btn' type='checkbox' id='menu-btn'/>
        <label className='menu-icon' for='menu-btn'>
            <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
          <li><Link to='#' smooth={true} duration={1000}>ABOUT</Link></li>
          <li><Link to='#' smooth={true} duration={1000}>SERVICES</Link></li>
          <li><Link to='#' smooth={true} duration={1000}>WORKS</Link></li>
          <li><Link to='#' smooth={true} duration={1000}>CONTACT</Link></li>
          <li><a href='blank' className='btn'>GET CV</a></li>
        </ul>
    </nav>
  );
}

export default Navbar
