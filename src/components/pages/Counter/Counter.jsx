import React from 'react'
import "./Counter.css"
import { project } from '../../data/dummydata'
import CountUp from "react-countup"

const Counter = () => {
    return (
        <div className='counter'>
            <div className='container'>
                {project.map((item) => (
                    <div className='box' key={item.id} data-aos="zoom-in">
                        {item.icon}
                        <h2>
                            <CountUp enableScrollSpy duration={2} end={item.num} />   {/* to increase the numbers */}
                        </h2>
                        <h4>{item.title}</h4>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Counter