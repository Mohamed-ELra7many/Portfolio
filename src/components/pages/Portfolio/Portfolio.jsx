import React, { useState } from 'react'
import { portfolio } from '../../data/dummydata'
import "./Portfolio.css"

const Portfolio = () => {
    const AllCategory = ["All", ...new Set(portfolio.map((item) => item.category))]    //To combine an All item with other items

    const [list, setList] = useState(portfolio)
    const [category, setCategory] = useState(AllCategory)

    const Filtration = (category) => {
        const FilterItem = portfolio.filter(item => item.category === category)    // to filter items
        setList(FilterItem)
        if (category === "All") {
            setList(portfolio)
        }
    }
    return (
        <div className='portfolio'>
            <div className='container'>
                <h3 className='heading'>Portfolio</h3>
                <div className='cat-button'>
                    {category.map(item => (
                        <button className='primaryBtn' onClick={() => Filtration(item)} key={item.id} data-aos="zoom-out-down">{item}</button>
                    ))}
                </div>
                <div className='content'>
                    {list.map((item) => (
                        <a href={item.link} className="box" key={item.id} data-aos="fade-up">
                            <div className='img'>
                                <img src={item.cover} alt={item.title} />
                            </div>
                            <div className='overlay'>
                                <h3>{item.title}</h3>
                                <i className="fa fa-eye"></i>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Portfolio