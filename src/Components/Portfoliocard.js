import React, { useState } from 'react'
import img from '../img/project.png'
const Portfoliocard = ({ data }) => {
    const [appurl, setappurl] = useState(
        (`http://image.thum.io/get/auth/68527-hunainaslam.vercel.appheight/100/http://${data.name}.vercel.app/`)
    )
    // `http://image.thum.io/get/auth/68527-hunainaslam.vercel.app//height/100/http://${data.name}.vercel.app/`

    // setappurl(``)
    // console.log(data.alias[0].domain);

    console.log("anchor", data.alias)

    return (
        <>
           
                return <div className="card">
                    <div className="card-body">
                        <img src={appurl} alt="" />
                        <div className='project-link'>
                            <a href={`/https:/${data.alias[0].domain}`} target='_blank'>
                                <p className="heading">{data.name}</p>
                            </a>
                        </div>
                    </div>
                </div>
            
        </>
    )
}

export default Portfoliocard