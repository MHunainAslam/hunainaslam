import React from 'react'
import rac from '../img/ornament1.png'
import { Progress, Space } from 'antd';

const About = () => {
    return (
        <>
            <section className='position-relative' id='about'>
                <img src={rac} className='aboutrac' alt="" />
                <div className="container ">
                    <div className="row">
                        <div className='about'>
                            <p className="heading">Who I AM</p>
                            <div className='para-border'>
                                <p className='para p-4 py-5'>My Name is Hunain Aslam Im a Meticulous Front-End Developer I have developed strong skills in Front-End development
                                    using modern technologies and frameworks. I am a quick learner and an excellent team player who enjoys
                                    collaborating with others to deliver outstanding results.</p>
                            </div>
                        </div>
                    </div>
                        <div className="row educationsec mt-0">
                        <p className="heading">Education</p>
                            <div className="col-md-6 pe-md-1 mt-5">
                                <div className="leftbox justify-content-center">
                                    <div className='text-start'>
                                        <h2 className='mt-2 heading'>Web Development</h2>
                                        <h2 className='mt-2 para'>Completed</h2>
                                        <h2 className='mt-2 para'>Percentage: 70</h2>
                                        <h2 className='mt-2 para'>Yers: 2021 to 2022</h2>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="col-md-6 ps-md-1 mt-5">
                                <div className="rightbox justify-content-center">
                                <div className='text-start'>
                                        <h2 className='mt-2 heading'>Computer Science</h2>
                                        <h2 className='mt-2 para'>Current Semester: 8 (Last)</h2>
                                        <h2 className='mt-2 para'>CGPA: 3.4</h2>
                                        <h2 className='mt-2 para'>Yers: 2020 to 2023</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
              
                        <p className="heading">Skills</p>
                        <div className='skills'>
                            <div className="skill-icon-1"></div>
                            <div className="skill-icon-2"></div>
                            <div className="row">
                                <div className="frontend"></div>
                                <div className="developer"></div>
                                <div className="col-sm-6 skills-left">
                                    <div className="skill-lang">
                                        <h4 className='lang-name'>HTML</h4>
                                        <h4 className='lang-per'>
                                            <Progress percent={80} status="active" />
                                        </h4>
                                        <div className="skills-point"></div>
                                    </div>
                                </div>
                                <div className="col-sm-6 skills-right">
                                    <div className="skill-lang">
                                        <h4 className='lang-name'>CSS</h4>
                                        <h4 className='lang-per'>
                                            <Progress percent={70} status="active" />
                                        </h4>
                                        <div className="skills-point"></div>
                                    </div>
                                </div>
                                <div className="col-sm-6 skills-left">
                                    <div className="skill-lang">
                                        <h4 className='lang-name'>Bootstrap</h4>
                                        <h4 className='lang-per'>
                                            <Progress percent={75} status="active" />
                                        </h4>
                                        <div className="skills-point"></div>
                                    </div>
                                </div>
                                <div className="col-sm-6 skills-right">
                                    <div className="skill-lang">
                                        <h4 className='lang-name'>JavaScript</h4>
                                        <h4 className='lang-per'>
                                            <Progress percent={70} status="active" />
                                        </h4>
                                        <div className="skills-point"></div>
                                    </div>
                                </div>
                                <div className="col-sm-6 skills-left">
                                    <div className="skill-lang">
                                        <h4 className='lang-name'>jQuery</h4>
                                        <h4 className='lang-per'>
                                            <Progress percent={60} status="active" />
                                        </h4>
                                        <div className="skills-point"></div>
                                    </div>
                                </div>
                                <div className="col-sm-6 skills-right">
                                    <div className="skill-lang">
                                        <h4 className='lang-name'>React Js</h4>
                                        <h4 className='lang-per'>
                                            <Progress percent={50} status="active" />
                                        </h4>
                                        <div className="skills-point"></div>
                                    </div>
                                </div>
                                <div className="col-sm-6 skills-left">
                                    <div className="skill-lang">
                                        <h4 className='lang-name'>Vue JS</h4>
                                        <h4 className='lang-per'>
                                            <Progress percent={50} status="active" />
                                        </h4>
                                        <div className="skills-point"></div>
                                    </div>
                                </div>
                                <div className="col-sm-6 skills-right">
                                    <div className="skill-lang">
                                        <h4 className='lang-name'>Next Js</h4>
                                        <h4 className='lang-per'>
                                            <Progress percent={50} status="active" />
                                        </h4>
                                        <div className="skills-point"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                 

                    <div className="row educationsec workexp">
                    <p className="heading">Working Experience</p>
                        <div className="col-md-6 pe-md-1 mt-5">
                            <div className="leftbox ">
                                <div className='text-start'>
                                    <h2 className='mt-2 heading'>Freelancing</h2>
                                    <h2 className='mt-2 para'>Duration: 2022 to Present</h2>
                                    <h2 className='mt-2 para'>Role: Frontend Developer</h2>
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-md-6 ps-md-1 mt-5">
                            <div className="rightbox ">
                            <div className='text-start'>
                                    <h2 className='mt-2 heading'>Eliteblue Technology</h2>
                                    <h2 className='mt-2 para'>Duration: Dec 2023 to Present <br />  <small className='intern-fs'> Intern (June 2022 to Nov 2022) </small> </h2>
                                    <h2 className='mt-2 para'>Role: Frontend Developer</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>)
}

export default About