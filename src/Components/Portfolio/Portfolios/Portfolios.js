import React from 'react'
import Portfolio from '../Portfolio'
import react_portfolio from '../../Images/Lingesh_Cover.JPG'
import blog from '../../Images/blog.png'


function Portfolios() {
    return (
        <div>
            <div className="home__row">
                <Portfolio
                    title="React Portfolio"
                    link="https://github.com/LingeshKrishnan/ReactPortfolio"
                    description="Portfolio and Personal Website built in React.js"
                    website="https://www.lingeshwaran.me"
                    image={react_portfolio}
                />
                <Portfolio
                    title="React Portfolio"
                    link="https://github.com/LingeshKrishnan/ReactPortfolio"
                    description="Portfolio and Personal Website built in React.js"
                    website="https://www.lingeshwaran.me"
                    image={react_portfolio}
                />
            </div>
            <div className="home__row">
                <Portfolio
                    title="Sample Symfony App"
                    link="https://github.com/LingeshKrishnan/Finance"
                    description="Simple Blog built in symfony, development and build is in progress."
                    website="https://aathiranrcomm.lingeshwaran.me/public/login"
                    image={blog}
                />
                <Portfolio
                    title="React Portfolio"
                    link="https://github.com/LingeshKrishnan/ReactPortfolio"
                    description="Portfolio and Personal Website built in React.js"
                    website="https://www.lingeshwaran.me"
                    image={react_portfolio}
                />
            </div>
        </div>
    )
}

export default Portfolios
