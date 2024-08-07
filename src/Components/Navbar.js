import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
const Navbar = () => {

    const { pathname } = useLocation();
  
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname])
    return (
        <>
            <section className='nav-sec'>
                <div className="container">
                
                    <nav className="navbar navbar-expand  nav-css">
                        <div className="container-fluid justify-content-center">

                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mx-auto mb-lg-0">
                                    <li className="nav-item">
                                        <HashLink className="nav-link" aria-current="page" to="/#home">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-door" viewBox="0 0 16 16">
                                                <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z" />
                                            </svg>
                                            <p>Home</p></HashLink>
                                    </li>
                                    <li className="nav-item">
                                        <HashLink className="nav-link" smooth to="/#about">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                            </svg>
                                            <p>About</p></HashLink>
                                    </li>
                                    <li className="nav-item ">

                                        <HashLink className="nav-link" to="/#portfolio">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-laptop" viewBox="0 0 16 16">
                                                <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
                                            </svg>
                                            <p>Portfolio</p></HashLink>
                                    </li>
                                    <li className="nav-item">
                                        <HashLink className="nav-link" to="/#contact">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-phone" viewBox="0 0 16 16">
                                                <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                                                <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                            </svg>
                                            <p>Contact</p></HashLink>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </nav>
                </div>
            </section>
        </>
    )
}

export default Navbar