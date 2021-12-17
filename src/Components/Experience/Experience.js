import React from 'react'
import '../Experience/Experience.css'

function Experience({ title, companyname, experience, projects, image }) {
    return (
        <div className="experience" id={'experience'}>
            <img className="experience__Companyimage"
                src={image}
                alt=""
            />
            <div className="experience__Info">
                <p className="experience__Title">{title}</p>
                <p className="experience__Companyname">
                    {companyname}
                </p>
                <p className="experience__Experience">
                    {experience}
                </p>
                <p className="experience__Projects">
                    {projects}
                </p>
            </div>

        </div>
    )
}

export default Experience
