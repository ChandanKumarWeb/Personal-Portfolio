import React from 'react'
import '../Style.css'

function Contactboxes(props) {
  return (
    <div className='cont-box'>
      <img src={props.image} alt='map'/>
      <div className='cont-detail pt-2'>
        <h4>{props.detail}</h4>
      </div>
    </div>
  )
}

export default Contactboxes
