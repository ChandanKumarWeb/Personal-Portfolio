import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../Style.css'

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-social'>
        <FontAwesomeIcon icon={faFacebook} className='facebook-icon' />
        <a href='https://www.instagram.com/iamchandankumar______/'><FontAwesomeIcon icon={faInstagram} className='instagram-icon' /></a>
        <FontAwesomeIcon icon={faTwitter} className='twitter-icon' />
         <FontAwesomeIcon icon={faLinkedin} className='linkedin-icon' />
      </div>
      <div className='copyright'>
        <p>@ 2024 - Designed & Developed by Chandan Kumar</p>
      </div>
    </div>
  )
}

export default Footer
