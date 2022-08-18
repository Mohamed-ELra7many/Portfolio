import React from 'react'
import { services } from '../../data/dummydata'
import "./Services.css"

const Services = () => {
    return (
        <section className="services">
            <div className="container">
                <h3 data-aos="flip-left">Services</h3>
                <div className="content">
                    {services.map((item) => (
                        <div className='box' key={item.id} data-aos="flip-right">
                            {item.icon}
                            <h4>{item.title}</h4>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services