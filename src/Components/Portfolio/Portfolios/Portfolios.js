import React from 'react'
import Portfolio from '../Portfolio'
import react_portfolio from '../../Images/Lingesh_Cover.JPG'
import home from '../../Images/hireme.png'
import Skills from '../../Skills/Skills'
import '../Portfolios/Portfolios.css'

function Portfolios() {
    return (
        <div>
            <a href='/#Contact_Section'>
            <img 
                className='portfolio__Image'
                src={ home }
                alt= ""
            />
            </a>
            <Skills />
            <div className="home__row">
                <Portfolio
                    title="React Portfolio(Personal Website)"
                    link="https://github.com/LingeshKrishnan/ReactPortfolio"
                    description="Portfolio and Personal Website built in React.js - To have a look over code click on the above link"
                    website="https://www.lingeshwaran.me"
                   
                />
                <Portfolio
                    title="Blog using Symfony(In development Progress)"
                    link="https://github.com/LingeshKrishnan/Finance"
                    description="Simple Blog developed in Symfony - Need improvement and Started development on this again after a while"
                    website="https://aathiranrcomm.lingeshwaran.me/public/login"
                   
                />
            </div>
            <div className="home__row">
                <Portfolio
                    title="Sample MERN Stack app"
                    link="https://github.com/LingeshKrishnan/Mern_Stack_Amazon_Clone"
                    description="Sample Ecommerce app(Amazon_Clone) - Using MERN Stack under development"
                                        
                />
                <Portfolio
                    title="Projects Worked"
                    link="https://www.leiyawellness.com"
                    website= "https://www.algebraconsultants.in"
                    description="Projects I Contributed in my Organization(Working/Worked Companies)
                    CodeIgniter APP(Currently Working)
                    Laravel APP(Currently Working)
                    MERN Stack APP(Currently Working)
                    Couldn't provide app links for current projects"                                     
                />
            </div>
        </div>
    )
}

export default Portfolios
