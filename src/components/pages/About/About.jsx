import React from 'react'
import "./About.css"
import { about } from '../../data/dummydata'
import MyCv from "../../home/my-cv.pdf"
const About = () => {
    return (
        <section className='about'>
            <div className='container flex'>
                {about.map((item, i) => (
                    <>
                        <div className='left'>
                            <img src={item.cover} alt={item.desc} data-aos="fade-down-right" />
                        </div>
                        <div className='right' data-aos="fade-down-left">
                            <h3 className='heading'>About Me</h3>
                            <p>{item.desc}</p>
                            <p>{item.desc1}</p>
                            <a href={MyCv} className='primaryBtn' download="CV.pdf">Download CV</a>
                        </div>
                    </>
                ))}
            </div>
        </section>
    )
}

export default About