import React from 'react'
import '../Portfolio/Portfolio.css'

function Portfolio({title, link, description, website}) {
    return (
        <div className="portfolio">
           
            <div className="portfolio__Info">
                <h3 className="portfolio__Title">
                    {title}
                </h3>
                <a href= { link }>
                    { link }
                </a>
                <p className="portfolio__Description">
                    { description }
                </p>       
                <a href={ website } className='portfolio__website'>
                    { website }
                </a>       
            </div>
        </div>
    )
}

export default Portfolio
