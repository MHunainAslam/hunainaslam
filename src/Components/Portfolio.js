import React from 'react'
import img from '../img/project.png'
const Portfolio = () => {
    return (
        <>
            <section className="portfolio-project" id='portfolio'>
                <div>
                <div className="portfolio-project-head"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 pe-md-1 ">
                            <div className="card">
                                <div className="card-body">
                                    <img src={img} alt="" />
                                    <div className='project-link'>
                                        <a href="">
                                            <p className="subheading">Portfolio</p>
                                            <p className="heading">HunainAslam</p>
                                            <p className="languages">HTML, CSS, JS & REACT</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 pe-md-1 ">
                            <div className="card">
                                <div className="card-body">
                                    <img src={img} alt="" />
                                    <div className='project-link'>
                                        <a href="">
                                            <p className="subheading">Portfolio</p>
                                            <p className="heading">HunainAslam</p>
                                            <p className="languages">HTML, CSS, JS & REACT</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 pe-md-1 ">
                            <div className="card">
                                <div className="card-body">
                                    <img src={img} alt="" />
                                    <div className='project-link'>
                                        <a href="">
                                            <p className="subheading">Portfolio</p>
                                            <p className="heading">HunainAslam</p>
                                            <p className="languages">HTML, CSS, JS & REACT</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 pe-md-1 ">
                            <div className="card">
                                <div className="card-body">
                                    <img src={img} alt="" />
                                    <div className='project-link'>
                                        <a href="">
                                            <p className="subheading">Portfolio</p>
                                            <p className="heading">HunainAslam</p>
                                            <p className="languages">HTML, CSS, JS & REACT</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio