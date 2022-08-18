import React from 'react'
import About from '../pages/About/About'
import Contact from '../pages/Contact/Contact'
import Counter from '../pages/Counter/Counter'
import Portfolio from '../pages/Portfolio/Portfolio'
import Services from '../pages/Services/Services'
import Skills from '../pages/Skills/Skills'
import Hero from './Hero/Hero'

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Counter />
            <Skills />
            <Portfolio />
            <Contact />
        </>
    )
}

export default Home
