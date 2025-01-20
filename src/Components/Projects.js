import React from "react";
import "../Style.css";
import trading_img from "../Images/Projects/trading-web.jpg";
import furniro_img from "../Images/Projects/Furniro-img.jpg";
import scramble_img from "../Images/Projects/Scramble-word.jpg";
import react_portfolio from "../Images/Projects/react-portfolio.jpg";
import Projectbox from "./Projectbox";

function Projects() {
  return (
    <div id="project-section" className="projects">
      <div className="container border-bottom border-danger pb-5">
        <p className="small-heading"> MY PROJECTS</p>
        <p className="heading">What I Have Done</p>
        <div class="row row-cols-1 row-cols-lg-2 gy-5 g-lg-5 pt-4">
          <div class="col card-col">
            <Projectbox
              image={furniro_img}
              title="Furniro: Furniture E-Commerce Store"
              discription="Developed using React, Tailwind CSS and JS "
              gitlink="https://github.com/ChandanKumarWeb/Furniture-E-Commerce"
              livelink="https://front-end-furniture.netlify.app/"
            />
          </div>
          <div class="col card-col">
            <Projectbox
              image={trading_img}
              title="Trading Website Landing Page"
              discription="Responsive HTML/CSS layout for online Trading HTML5, CSS3 (SCSS)"
              gitlink="https://github.com/ChandanKumarWeb/trading-demo-website"
              livelink="https://demo-trading-web.netlify.app/trading-instrument"
            />
          </div>
          <div class="col card-col">
            <Projectbox
              image={scramble_img}
              title="Dashboard With Curd Operations"
              discription="Dashboard built with React JS, Chart.js, and Tailwind CSS."
              gitlink="https://github.com/ChandanKumarWeb/Dasboard"
              livelink="https://proffesional-dashboard-demo.netlify.app/"
            />
          </div>
          <div class="col card-col">
            <Projectbox
              image={react_portfolio}
              title="Portfolio Using React"
              discription="Resposive Portfolio Website using HTML, CSS, BOOTSTRAP, REACT JS"
              gitlink="https://github.com/ChandanKumarWeb/Personal-Portfolio"
              livelink="https://its-chandan-portfolio.netlify.app/"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
