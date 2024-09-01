import React from 'react'
import Servicebox from './Servicebox'
import '../Style.css'
function Services() {
  return (
    <div id="services-section" className='services'>
        <div className='container border-bottom border-danger pb-5'>
            <p className='small-heading'> MY SERVICES</p>
            <p className='heading'>What I Do</p>
            <div className="row row-cols-2 row-cols-lg-3 g-4 g-lg-6 pt-4 ">
              <div className='col boxes'>
                <Servicebox iconName="laptopCode" 
                  title="Website Design" 
                  discription="Created responsive, user-friendly websites with optimized performance and modern aesthetics."
                  />
              </div>
              <div className='col boxes'>
                <Servicebox iconName="Mobile" 
                  title="App Development"
                  discription="Developed cross-platform apps with sleek design and seamless performance."
                />
              </div>
              <div className='col boxes'>
                <Servicebox iconName="Business" 
                  title="Business Strategy" 
                  discription="Crafted strategic business plans to drive growth, optimize operations, and maximize profitability."
                  />
              </div>
              <div className='col boxes'>
                <Servicebox iconName="Database" 
                  title="D-B Management" 
                  discription="Managed databases efficiently, ensuring data integrity, security, and accessibility."
                  />
              </div>
              <div className='col boxes'>
                <Servicebox iconName="UI" 
                  title="UI/UX Design" 
                  discription="Designed intuitive, engaging user interfaces focused on seamless user experiences."
                  />
              </div>
              <div className='col boxes'>
                <Servicebox iconName="Graph" 
                  title="Digital Marketing" 
                  discription="Executed effective digital marketing strategies to boost online engagement and sales."
                  />
              </div>
            </div>
        </div>
    </div>
  )
}

export default Services
