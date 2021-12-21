import React from "react";
import Latest_CV from '../Images/LINGESHWARAN_KRISHNAN_CV.pdf'
import Latest_Cover from '../Images/CoverLetter_LingeshwaranKrishnan.pdf'
import './Resume.css'

const Resume = () => {

    return (
        <object width="100%" height="800" data={Latest_CV} type="application/pdf"></object>
        //         <a href="https://app.testdome.com/cert/6d00e3ccf7914b39b0c06ba39f6db8d1" className="testdome-certificate-stamp gold"><span className="testdome-certificate-name">    
        //         Lingeshwaran Krishnan

        // </span><span className="testdome-certificate-test-name">PHP </span><span className="testdome-certificate-card-logo">TestDome<br />Certificate</span></a>
    )
}
export default Resume;