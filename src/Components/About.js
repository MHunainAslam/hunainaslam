import React from 'react'
import rac from '../img/ornament1.png'
import { Progress, Space } from 'antd';

const About = () => {
    return (
        <>
            <section className='position-relative' id='about'>
                <img src={rac} className='aboutrac' alt="" />
                <div className="container ">
                    <div className='about'>
                        <p className="heading">Who I AM</p>
                        <div className='para-border'>
                            <p className='para p-4 py-5'>My Name is Hunain Aslam Im a Meticulous Front-End Developer I have developed strong skills in Front-End development
                                using modern technologies and frameworks. I am a quick learner and an excellent team player who enjoys
                                collaborating with others to deliver outstanding results.</p>
                        </div>
                    </div>

                    <p className="heading">Skills</p>
                    <div className='skills'>
                        <div className="row">
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

                </div>
            </section>
        </>)
}

export default About