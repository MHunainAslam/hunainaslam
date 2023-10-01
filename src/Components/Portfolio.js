import React from 'react'
import { useState, useEffect } from 'react'
import Portfoliocard from './Portfoliocard';
import { NavLink } from 'react-router-dom';
import Loader from './Loader';
import { HashLink } from 'react-router-hash-link';



const Portfolio = ({ projectss, loading }) => {

    return (
        <>
            {loading ? <Loader />
                :
                <section className="portfolio-project" id='portfolio'>

                    <div className="portfolio-project-head z-9"></div>
                    <div className="container z-9">
                        <div className="row">
                            <p className="heading">Most Recent Projects</p>
                            {projectss?.projects.slice(0, 6).map((data) => {
                                return <div className="col-md-4 pe-md-1">
                                    <Portfoliocard data={data} />
                                </div>
                            })}
                        </div>
                        <div className="col-md-3 col-6 mx-auto mt-4">
                            <NavLink  to={'/allprojects'} className='btn secondary-btn'>View All</NavLink>
                        </div>
                    </div>

                </section>}

        </>
    )
}

export default Portfolio