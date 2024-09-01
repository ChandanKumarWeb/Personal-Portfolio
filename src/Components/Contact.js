import React from 'react'
import Contactboxes from './Contactboxes'
import '../Style.css'
import map from '../Images/Contact-img/map.png'
import telephone from '../Images/Contact-img/telephone .png'
import email from '../Images/Contact-img/email.png'
import checked from '../Images/Contact-img/checked.png'


function Contact() {
  return (
    <div id="contact-section" className='contact-us'>
        <div className='container border-bottom border-danger pb-5'>
            <p className='contact-small-heading'> CONTACT </p>
            <p className='contact-heading'>Contact With Me </p>
            <div className='row'>
              <div className='col-lg-4 order-lg-1 order-2 banner-content contact-us-box mt-5'>
                <div className='row cont-width'>
                  <Contactboxes image={map} detail='Jagatpura, Jaipur, Rajasthan'/>
                </div>
                <div className='row cont-width pt-3'>
                  <Contactboxes image={telephone} detail='+91 8257060642'/>
                </div>
                <div className='row cont-width pt-3'>
                  <Contactboxes image={email} detail='chandankumarray4255@gmail.com'/>
                </div>
                <div className='row cont-width pt-3'>
                  <Contactboxes image={checked} detail='Freelance Available'/>
                </div>
              </div>
              <div class="col-lg-8 order-lg-2 order-1 mt-5">
              <div className="form-card1">
        <div className="form-card2">
        <form className="form">
             <p className="form-heading">Get In Touch</p>

      <div className="form-field">
        <input required="" placeholder="Name" className="input-field" type="text" />
      </div>

      <div className="form-field">
        <input
          required=""
          placeholder="Email"
          className="input-field"
          type="email"
        />
      </div>

      <div className="form-field">
        <input
          required=""
          placeholder="Subject"
          className="input-field"
          type="text"
        />
      </div>

      <div className="form-field">
        <textarea
          required=""
          placeholder="Message"
          cols="30"
          rows="3"
          className="input-field"
        ></textarea>
      </div>

      <button className="sendMessage-btn">Send Message</button>
    </form>
  </div>
</div>
              </div>

            </div>
        </div>
    </div>
  )
}

export default Contact
