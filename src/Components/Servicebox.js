import React from 'react'
import '../Style.css'
import IconComponent from './IconComponent';


function Servicebox(props) {
  return (
    <div className='box'>
      <div className='service-logo'>
        <IconComponent iconName={props.iconName} />
      </div>
      <div className='a-b-text'>
        <h2 className='box-head'>{props.title}</h2>
        <p className='box-pera'>{props.discription}</p>
      </div>
    </div>
  )
}

export default Servicebox
