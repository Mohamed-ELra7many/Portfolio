import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "../common/Header/Header"
import Home from '../home/Home'
import About from './About/About'
import Contact from './Contact/Contact'
import Portfolio from './Portfolio/Portfolio'
import Services from './Services/Services'


const Pages = () => {
    return (
        <>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/services">
                        <Services />
                    </Route>
                    <Route path="/portfolio">
                        <Portfolio />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default Pages



