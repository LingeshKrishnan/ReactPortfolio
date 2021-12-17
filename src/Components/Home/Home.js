import React from 'react'
import Experience from '../Experience/Experience'
import gideons from '../Images/gideons.png'
import ace from '../Images/logo.ico'
import testronic from "../Images/testronic.ico"
import '../Home/Home.css'

function Home() {
    return (
        <div className="home__Container">
            <div className="home__row">
                <Experience
                    title="Full Stack Developer"
                    companyname="Gideons Digital Agency Pvt Ltd"
                    experience="August 2021 - Present"
                    projects="Working in projects using CodeIgniter, Laravel, React"
                    image={gideons}
                />
            </div>
            <div className="home__row">
                <Experience
                    title="Web Developer"
                    companyname="ACE Services and Solutions"
                    experience="October 2019 - August 2021"
                    projects="Worked in projects using PHP, javascript, HTML, CSS, jQuery"
                    image={ace}
                />
                <Experience
                    title="QA Tester"
                    companyname="Testronic Sp.zoo"
                    experience="June 2017 - July 2018"
                    projects="Tested VR, Mobile, PC and Console Games"
                    image={testronic}
                />
            </div>

        </div>
    )
}

export default Home
