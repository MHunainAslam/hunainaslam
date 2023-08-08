import React from 'react'
import { useState, useEffect } from 'react'
import Portfoliocard from './Portfoliocard';

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

                <div className="portfolio-project-head"></div>
                <div className="container">
                    <div className="row">
                        {projectss?.projects.map((data) => {
                            return <div className="col-md-6 pe-md-1">
                                <Portfoliocard  data={data} />
                            </div>
                        })}



                    </div>
                </div>

            </section>
        </>
    )
}

export default Portfolio