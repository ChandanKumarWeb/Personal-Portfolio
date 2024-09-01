import React from 'react'
import '../Style.css'
import trading_img from '../Images/Projects/trading-web.jpg'
import portfolio_img from '../Images/Projects/portfolio-img.jpg'
import scramble_img from '../Images/Projects/Scramble-word.jpg'
import react_portfolio from '../Images/Projects/react-portfolio.jpg'
import Projectbox from './Projectbox'

function Projects() {
  return (
    <div id="project-section" className='projects'>
        <div className='container border-bottom border-danger pb-5'>
            <p className='small-heading'> MY PROJECTS</p>
            <p className='heading'>What I Have Done</p>
            <div class="row row-cols-1 row-cols-lg-2 gy-5 g-lg-5 pt-4">
                <div class="col card-col">
                    <Projectbox  image={trading_img} title="Trading Website Landing Page" discription="Responsive HTML/CSS layout for online Trading HTML5, CSS3 (SCSS)"/>
                </div>
                <div class="col card-col">
                    <Projectbox  image={portfolio_img} title="Landing Page For Frontend Developer" discription="Responsive HTML/CSS layout for my Introduction HTML5, CSS3 (SCSS)"/>
                </div>
                <div class="col card-col">
                    <Projectbox  image={scramble_img} title="Website For Fun In Free Time" discription="Responsive HTML/CSS layout for Fun HTML5, CSS3 (SCSS)"/>
                </div>
                <div class="col card-col">
                    <Projectbox  image={react_portfolio} title="Trading Website" discription="Resposive Portfolio Website using HTML, CSS, BOOTSTRAP, REACT JS"/>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Projects
