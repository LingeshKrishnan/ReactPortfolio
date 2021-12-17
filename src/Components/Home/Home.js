import React from 'react'
import Experience from '../Experience/Experience'
import gideons from '../Images/gideons.png'
import ace from '../Images/logo.ico'
import testronic from "../Images/testronic.ico"
import '../Home/Home.css'
import Portfolio from '../Portfolio/Portfolio'
import react_portfolio from '../Images/Lingesh_Cover.JPG'
import blog from '../Images/blog.png'


function Home() {
    return (
        <div className="home__Container">
            <div className="home__row">
                <Experience 
                    title = "Full Stack Developer"
                    companyname = "Gideons Digital Agency Pvt Ltd"
                    experience = "August 2021 - Present"
                    projects = "Working in projects using CodeIgniter, Laravel, React"
                    image = { gideons }
                />
            </div>
            <div className="home__row">
                <Experience 
                    title = "Web Developer"
                    companyname = "ACE Services and Solutions"
                    experience = "October 2019 - August 2021"
                    projects = "Worked in projects using PHP, javascript, HTML, CSS, jQuery"
                    image = { ace }
                />
                 <Experience 
                    title = "QA Tester"
                    companyname = "Testronic Sp.zoo"
                    experience = "June 2017 - July 2018"
                    projects = "Tested VR, Mobile, PC and Console Games"
                    image = { testronic }
                />
            </div>
            
            <div className="home__row">
                <Portfolio 
                    title= "React Portfolio"
                    link ="https://github.com/LingeshKrishnan/ReactPortfolio"
                    description = "Portfolio and Personal Website built in React.js"
                    website="https://www.lingeshwaran.me"
                    image = { react_portfolio }
                />
                <Portfolio 
                    title= "React Portfolio"
                    link ="https://github.com/LingeshKrishnan/ReactPortfolio"
                    description = "Portfolio and Personal Website built in React.js"
                    website="https://www.lingeshwaran.me"
                    image = { react_portfolio }
                />              
            </div>
            <div className="home__row">
                <Portfolio 
                    title= "Sample Symfony App"
                    link ="https://github.com/LingeshKrishnan/Finance"
                    description = "Simple Blog built in symfony, development and build is in progress."
                    website="https://aathiranrcomm.lingeshwaran.me/public/login"
                    image = { blog }
                />
                <Portfolio 
                    title= "React Portfolio"
                    link ="https://github.com/LingeshKrishnan/ReactPortfolio"
                    description = "Portfolio and Personal Website built in React.js"
                    website="https://www.lingeshwaran.me"
                    image = { react_portfolio }
                />
            </div>
        </div>
    )
}

export default Home
