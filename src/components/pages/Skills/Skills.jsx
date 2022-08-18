import React from 'react'
import "./Skills.css"
import { skills } from '../../data/dummydata'

const Skills = () => {


    return (
        <div className="our-skills" >
            <h2 className="heading">Our Skills</h2>
            <div className="container">
                <div className="skills">
                    {skills.map((item) => (
                        <div className="skill" key={item.id} data-aos="zoom-in-up">
                            <h3>{item.title} <span style={{ left: item.width }}>{item.width}</span></h3>
                            <div className="the-progress">
                                <span data-width={item.width} style={{ width: item.width }}></span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Skills

/*
<div ref={divref}>
            <div className='container'>
                <div className=" skills">
                    
                        <div className='box' key={item.id}>
                            {item.title}
                            <span data-width={item.width}></span>
                        </div>
                    
                </div>
            </div>
        </div>
*/