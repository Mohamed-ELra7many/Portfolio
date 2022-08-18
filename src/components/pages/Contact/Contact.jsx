import React from 'react'
import "./Contact.css"
import { contact } from '../../data/dummydata'

const Contact = () => {
    return (
        <div className='contact'>
            <div className='container'>
                <h3 className='heading'>Keep In Touch</h3>
                <div className='content flexsb'>
                    <div className='right'>
                        <form>
                            <div className='flex'>
                                <input type='text' placeholder='Name' data-aos='flip-left' />
                                <input type='email' placeholder='Email' data-aos='flip-right' />
                            </div>
                            <input type='email' placeholder='Subject' data-aos='flip-up' />
                            <textarea name='' id='' cols='30' rows='10' data-aos='flip-down'></textarea>
                            <a href='mailto:mohamed231adbo@gmail.com' data-aos='zoom-in-up'>Submit</a>    {/* to send message to my gmail */}
                        </form>
                    </div>
                    <div className='left'>
                        {contact.map((item, i) => (
                            <div className='box' key={i} data-aos="zoom-in-down">
                                {item.icon}
                                <p>{item.text1}</p>
                                <p>{item.text2}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact