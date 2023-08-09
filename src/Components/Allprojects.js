import React from 'react'
import Portfoliocard from './Portfoliocard'
import img1 from '../img/ornament1.png'
import img2 from '../img/ornament3.png'
import img3 from '../img/ornament.png'
import Loader from './Loader'
const Allprojects = ({ loading, projectss }) => {
  return (
    <>
      {loading ? <Loader/>:
        <section className="all-projects portfolio-project" id='portfolio'>

          <img src={img1} className='project-img-1' alt="" />
          <img src={img2} className='project-img-2' alt="" />
          <img src={img3} className='project-img-3' alt="" />
          <div className="portfolio-project-head z-9"></div>
          <div className="container z-9">
            <div className="row">

              {projectss?.projects.map((data) => {
                return <div className="col-md-6 ">
                  <Portfoliocard data={data} />
                </div>
              })}
            </div>
          </div>

        </section>}
    </>
  )
}

export default Allprojects