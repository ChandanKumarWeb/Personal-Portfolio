import React from 'react'
import Aboutbox from './Aboutbox'

function About() {
  return (
    <div id="about-section" className='about'>
        <div className='container border-bottom border-danger pb-5'>
            <p className='small-heading'> MY JOURNEY </p>
            <p className='heading'>About</p>
            <div className='row row-cols-2 row-cols-lg-4 g-4 g-lg-4'>
                <div className='col'>
                    <Aboutbox title="2018" description="Studied 10th from SDV (Shanti Deva Vidyalaya) Bomdila, West-Kameng District, Arunachal Pradesh."/>
                </div>
                <div className='col'>
                    <Aboutbox title="2020" description="Studied 12th from GHSS(Govt. Higher Secondary School) Bomdila, West-Kameng District, Arunachal Pradesh."/>
                </div>
                <div className='col'>
                    <Aboutbox title="2023" description="Graduated from JNU (Jaipur National University) Jagatpura, Jaipur Rajasthan."/>
                </div>
                <div className='col'>
                    <Aboutbox title="2024" description="Worked out in which Bald want to build a developer's career and started to learn Frontend Development."/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
