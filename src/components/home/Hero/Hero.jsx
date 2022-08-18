/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "./Hero.css"
import { home } from '../../data/dummydata'
import Typewriter from "typewriter-effect"       // to animation name
import MyCv from "../../home/my-cv.pdf"

const Hero = () => {
    return (
        <>
            <section className='hero'>
                {home.map((item, index) => (
                    <div className="hero-container" key={index}>
                        <h3 data-aos="fade-up-right">{item.text}</h3>
                        <h1>
                            <Typewriter options={{
                                strings: [`${item.name}`, `${item.post}`],
                                autoStart: true, loop: true
                            }} data-aos="fade-down" />
                        </h1>
                        <p data-aos="fade-up-left">{item.desc}</p>
                        <a href={MyCv} className='primaryBtn' download="CV.pdf">Download CV</a>   {/* to download my cv */}
                    </div>
                ))}
            </section>
        </>
    )
}

export default Hero
