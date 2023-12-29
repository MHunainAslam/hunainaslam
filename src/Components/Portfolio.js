import React from 'react'
import { useState, useEffect } from 'react'
import Portfoliocard from './Portfoliocard';
import { NavLink } from 'react-router-dom';
import Loader from './Loader';
import etijwaal from '../img/etijwaal.png'
import ppm from '../img/postplaymedia.png'
import eoscl from '../img/eoscl.png'
import taro from '../img/taro.png'
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
                            <p className="heading">Projects</p>
                            {/* {projectss?.projects.slice(0, 6).map((data) => {
                                return <div className="col-md-4 pe-md-1">
                                    <Portfoliocard data={data} />
                                </div>
                            })} */}
                            <div className="col-md-6 pe-md-1">
                                <div className="card">
                                    <div className="card-body">
                                        <a href={`https://www.etijwaal.com`} className='projecr-a' target='_blank'>

                                            <img src={etijwaal} alt="" className='h-auto object-fit-contain'/>
                                            <div className='project-link'>

                                                <p className="heading-m">Etijwaal</p>

                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 pe-md-1">
                                <div className="card">
                                    <div className="card-body">
                                        <a href={`https://postplaymedia.vercel.app/`} className='projecr-a' target='_blank'>

                                            <img src={ppm} alt="" className='h-auto object-fit-contain'/>
                                            <div className='project-link'>

                                                <p className="heading-m">Post Play Media</p>

                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 pe-md-1">
                                <div className="card">
                                    <div className="card-body">
                                        <a href={`https://eoscl.vercel.app/`} className='projecr-a' target='_blank'>

                                            <img src={eoscl} alt="" className='h-auto object-fit-contain'/>
                                            <div className='project-link'>

                                                <p className="heading-m">Eoscl</p>

                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 pe-md-1">
                                <div className="card">
                                    <div className="card-body">
                                        <a href={`https://tarospace.com/`} className='projecr-a' target='_blank'>

                                            <img src={taro} alt="" className='h-auto object-fit-contain'/>
                                            <div className='project-link'>

                                                <p className="heading-m">Tarospace</p>

                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-6 mx-auto mt-4">
                            <NavLink to={'/allprojects'} className='btn secondary-btn'>View All</NavLink>
                        </div>
                    </div>

                </section>}

        </>
    )
}

export default Portfolio