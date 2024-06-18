import React from 'react'
import '../Style.css'

function Aboutbox(props) {
  return (
    <div>
        <h2 className='about-head px-2'>{props.title}</h2>
        <div class="loader">
          <div class="circle">
            <div class="dot"></div>
            <div class="outline"></div>
          </div>
          <div class="circle">
            <div class="dot"></div>
            <div class="outline"></div>
          </div>
          <div class="circle">
            <div class="dot"></div>
            <div class="outline"></div>
          </div>
          <div class="circle">
            <div class="dot"></div>
            <div class="outline"></div>
          </div>
        </div>
        <p className='about-pera pt-5'>
            {props.description}
        </p>
    </div>
  )
}

export default Aboutbox
