import React from 'react'
import Latest_CV from '../Images/Resume.png'
import Latest_Cover from '../Images/Coverletter.png'
import { Link } from 'react-router-dom'
import './Documents.css'

function Documents() {
    return (
        <div className='Reusme__CoverLetter' id="Documents">
            <div className='resume__div'>
                <Link to="/LINGESHWARAN_KRISHNAN_CV" target="_blank">
                    <h4>View/Download My Upadted CV</h4>
                    <img className='resume__Image' src={Latest_CV}></img>
                </Link>
            </div>
            <div className='coverletter__div'>
                <Link to="/LINGESHWARAN_KRISHNAN_Cover_Letter" target="_blank">
                    <h4>View/Download My Cover Letter</h4>
                    <img className='Coverletter__Image' src={Latest_Cover}></img>
                </Link>
            </div>
        </div>
    )
}

export default Documents
