import React, { useState } from 'react'
import img from '../img/project.png'
const Portfoliocard = ({ data }) => {
    const [appurl, setappurl] = useState(
        (`http://image.thum.io/get/auth/68527-hunainaslam.vercel.app/height/100/http://${data.name}.vercel.app/`)
    )
    // `http://image.thum.io/get/auth/68527-hunainaslam.vercel.app//height/100/http://${data.name}.vercel.app/`
    console.log(appurl);
    // setappurl(``)
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <img src={appurl} alt="" />
                    <div className='project-link'>
                        <a to="data.name">
                            <p className="subheading">Portfolio</p>
                            <p className="heading">{data.name}</p>
                            <p className="languages">HTML, CSS, JS & REACT</p>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfoliocard