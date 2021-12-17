import React from 'react'
import '../Portfolio/Portfolio.css'

function Portfolio({title, link, description, image, website}) {
    return (
        <div className="portfolio">
            <a  href= {website}><img className="portfolio__Image"
            src = {image}
            alt=""
            /></a>
            <div className="portfolio__Info">
                <p className="portfolio__Title">
                    {title}
                </p>
                <a href= { link }>
                    { link }
                </a>
                <p className="prtofolio__Description">
                    { description }
                </p>              
            </div>
        </div>
    )
}

export default Portfolio
