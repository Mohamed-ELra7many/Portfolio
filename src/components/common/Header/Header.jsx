import React, { useState } from 'react'
import "./Header.css"
import { NavLink } from 'react-router-dom'
import { navlink } from '../../data/dummydata'
const Header = () => {
    const [responsev, setResponsev] = useState(false)      // responsev   media screen
    return (
        <header>
            <div className='container flexsb'>
                <div className='logo'>
                    <NavLink to="/" data-aos="fade-right">ELRAHMANY</NavLink>
                </div>
                <div className={responsev ? "nav-mobile" : "nav"} onClick={() => setResponsev(false)} >
                    {navlink.map((item, i) => (
                        <NavLink to={item.url} key={i} >{item.text}</NavLink>
                    ))}
                </div>
                <button className="toggle" onClick={() => setResponsev(!responsev)}>
                    <i className='fa fa-bars '></i>
                </button>
            </div>
        </header>

    )
}

export default Header
