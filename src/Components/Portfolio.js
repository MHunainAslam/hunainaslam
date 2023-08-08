import React from 'react'
import { useState, useEffect } from 'react'
import Portfoliocard from './Portfoliocard';
import { NavLink } from 'react-router-dom';



const Portfolio = () => {
    const [projectss, setProjects] = useState()
    const apiKey = "EoVsrpC7zfaWVWWDb9LTCb9K";
    const projectsEndpoint = "https://api.vercel.com/v6/projects";

    useEffect(() => {
        fetch(projectsEndpoint, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        })
            .then(response => response.json())
            .then(data => {
                // Update the state with fetched data
                setProjects(data);
            })
            .catch(error => {
                // Handle errors here
                console.error('Error:', error);
            });
    }, []);

    return (
        <>
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
                        <NavLink to={'/allproject'} className='btn secondary-btn'>View All</NavLink>
                    </div>
                </div>

            </section>


        </>
    )
}

export default Portfolio