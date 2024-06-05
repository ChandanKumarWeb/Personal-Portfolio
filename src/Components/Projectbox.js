import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDeskpro } from '@fortawesome/free-brands-svg-icons';

import '../Style.css'

function Projectbox(props) {
  return (
    <div className='cards'>
      <div className='project-image'>
        <img src={props.image} alt=''/>
      </div>
      <div className='title'>
        <h2 className='box-head'>{props.title}</h2>
      </div>
        <div className='detail'>
            <p className='box-pera'>{props.discription}</p>
        </div>
        <div className='buttons'>
            <a href='blank' className='btn'> <FontAwesomeIcon icon={faGithub} /> GIT HUB</a>
            <a href='blank' className='btn'> <FontAwesomeIcon icon={faDeskpro} />LIVE PREVIEW</a>
        </div>
    </div>
  )
}

export default Projectbox
