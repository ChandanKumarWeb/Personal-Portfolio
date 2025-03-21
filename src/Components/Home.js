import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../Style.css'
import image from '../Images/images.jpg'
function Home() {
  return (
    <div className='home-space'>
    <div className="container border-bottom border-danger pb-5">
      <div className="row ">
        <div className="col-lg-7 order-lg-1 order-2">
          <p className='sub-head'>Hello guys, <span className='intro-span'>I'm</span></p>
          <h1 class="animate__animated animate__bounce name">Chandan Kumar</h1>
          <p className='sub-head'>Web Designer And Web Developer</p>
          <p className='sub-pera'>I am passionate about the ever-evolving world of web development and its impact on user experiences. My goal is to stay ahead of industry trends, continuously enhance my skills, and create efficient, user-friendly web solutions.</p>
          <p className='sub-head'>Find Me On :</p>
          <div className='social-media'>
            <FontAwesomeIcon icon={faFacebook} className='facebook-icon' />
            <a href='https://www.instagram.com/iamchandankumar__/'><FontAwesomeIcon icon={faInstagram} className='instagram-icon' /></a>
            <FontAwesomeIcon icon={faTwitter} className='twitter-icon' />
            <a href='https://www.linkedin.com/in/chandan-d/'><FontAwesomeIcon icon={faLinkedin} className='linkedin-icon' /></a>
          </div>
          <div className="container ">
            <div className="row">
                <div className="col-lg-4 pt-5">
                    <h1>1+</h1>
                    <h6 className="pt-2">YEARS OF EXPERIENCE</h6>
                </div>
                <div className="col-lg-5 pt-5">
                    <h1>5+</h1>
                    <h6 className="pt-2">GLOBAL WORKING CLIENT</h6>
                </div>
                <div className="col-lg-3 pt-5">
                    <h1>4+</h1>
                    <h6 className="pt-2">PROJECTS</h6>
                </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5 order-lg-2 order-1 image">
          <div className='animate__animated animate__bounce design'>
            <div className='animate__animated animate__bounce my-image'>
              <img src={image} alt=''/>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Home
