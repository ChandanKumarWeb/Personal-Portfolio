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
    <div className="container home-space">
      <div className="row ">
        <div className="col-lg-7 order-lg-1 order-2">
          <p className='sub-head'>Hell guys, <span className='intro-span'>I'm</span></p>
          <h1 class="animate__animated animate__bounce name">Chandan Kumar</h1>
          <p className='sub-head'>Web Designer And Web Developer</p>
          <p className='sub-pera'>I am fascinated by the ever-evolving world of web development and the impact it has on user experiences. I am committed to staying current with industry trends and continuously improving my skills.</p>
          <p className='sub-head'>Find Me On :</p>
          <div className='social-media'>
            <FontAwesomeIcon icon={faFacebook} className='facebook-icon' />
            <FontAwesomeIcon icon={faInstagram} className='instagram-icon' />
            <FontAwesomeIcon icon={faTwitter} className='twitter-icon' />
            <FontAwesomeIcon icon={faLinkedin} className='linkedin-icon' />
          </div>
        </div>
        <div className="col-lg-5 order-lg-2 order-1 image">
          <div className='animate__animated animate__bounce design'>
            <div className='animate__animated animate__bounce my-image'>
              <img src={image} alt='my-image'></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home
