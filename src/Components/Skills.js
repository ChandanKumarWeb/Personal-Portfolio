import React from 'react'
import pointingman from '../Images/point-img.png'
import '../Style.css'
import CircularProgress from './CircularProgress';

function Skills() {
  return (
    <div className='skills'>
        <div className='container border-bottom border-danger pb-5'>
            <p className='small-heading'> MY SKILLS</p>
            <p className='heading'>Technologies</p>
            <div className="row  row-cols-1 row-cols-lg-2">
                <div className="col order-lg-1 order-1">
                    <div className='row row-cols-2 row-cols-lg-2 g-4 g-lg-6'>
                        <div className='col bar'>
                            <CircularProgress progressEndValue={90} speed={30} title="HTML" />
                        </div>
                        <div className='col bar'>
                            <CircularProgress progressEndValue={80} speed={30} title="CSS, Tailwind & Bootstrap" />
                        </div>
                        <div className='col bar'>
                            <CircularProgress progressEndValue={70} speed={30} title="Js & TypeScript " />
                        </div>
                        <div className='col bar'>
                            <CircularProgress progressEndValue={60} speed={30} title="UI Design In Figma" />
                        </div>
                        <div className='col bar'>
                            <CircularProgress progressEndValue={70} speed={30} title="ReactJs" />
                        </div>
                        <div className='col bar'>
                            <CircularProgress progressEndValue={40} speed={30} title="NextJs" />
                        </div>
                    </div>
                </div>
                <div className="col order-lg-2 order-2 pointing-img" >
                    {/* <img src="pointman" alt="picture" style="width: 100%; height: 80%;"/> */}
                    <img src={pointingman} alt="pic" style={{width: "100%",height: "80%"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills
