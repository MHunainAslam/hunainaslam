import React, { useState } from 'react'
import img from '../img/project.png'
const Portfoliocard = ({ data }) => {
    const [appurl, setappurl] = useState(
        (`http://image.thum.io/get/auth/68541-hunainaslam/height/100/http://${data.alias[0].domain}`)
    )
    // `http://image.thum.io/get/auth/68527-hunainaslam.vercel.app//height/100/http://${data.name}.vercel.app/`

    // setappurl(``)
    // console.log(data.alias[0].domain);

    console.log("anchor", data.alias)

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <a href={`http://${data.alias[0].domain}`} className='projecr-a' target='_blank'>
                        
                        <img src={appurl} alt="" />
                        <div className='project-link'>

                        <p className="heading">{data.name}</p>

                        </div>
                    </a>
                </div>
            </div>

        </>
    )
}

export default Portfoliocard