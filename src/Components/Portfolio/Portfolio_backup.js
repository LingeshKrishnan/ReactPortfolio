import React from "react";
import lw from '../Images/lw.jpg';
import algebra from '../Images/logoAlgebra.png';
import testserver from '../Images/testserver.jpg';
import aathiranrcomm from '../Images/blog.png'

const Portfolio = () => {
    return (
            <section className="Portfolio_Section" id="Portfolio_Section">
                <h2 className="Portfolio_Title" align="center"><span>Personal Portfolios</span></h2>
                 <div className="row">
  
                    <div className="col-lg-4 col-md-4 col-sm-6 mb-3" id="leiyawellness">
                        <div className="card shadow">
                       <a href="https://www.leiyawellness.com" target="_blank">     <img src={lw}  className="card-img-top" alt="LeiyaWellness" /></a>
                        <div className="card-body text-center">
                            <a href="https://www.leiyawellness.com" target="_blank">LeiyaWellness(BackEnd Focused)</a>
                        </div>
                        </div>                             
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-6 mb-3" id="leiyawellness">
                        <div className="card shadow" >
                        <a href="https://www.algebraconsultants.in" target="_blank"><img src={algebra}   className="card-img-top" alt="AlgebraConsultants" /></a>
                        <div className="card-body text-center">
                           <a href="https://www.algebraconsultants.in" target="_blank">AlgebraConsultants(FrontEnd Focused)</a>
                        </div>
                        </div>                             
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-6 mb-3" id="leiyawellness">
                        <div className="card shadow">
                        <a  href="https://testserver.lingeshwaran.me" target="_blank"><img src={testserver} className="card-img-top" alt="canada" /></a>
                        <div className="card-body text-center">
                           <a href="https://testserver.lingeshwaran.me" target="_blank">WorldwideEdukation(Live Shortly::FrontEnd)</a>
                        </div>
                        </div>                             
                    </div>


                 </div>
                 <div className="row">
  
                    <div className="col-lg-6 col-md-6 col-sm-6 mb-3" id="aathiranrcomm">
                        <div className="card shadow">
                        <a href="https://aathiranrcomm.lingeshwaran.me/public" target="_blank">     <img src={aathiranrcomm}  className="card-img-top" alt="LeiyaWellness" /></a>
                        <div className="card-body text-center">
                            <a href="https://aathiranrcomm.lingeshwaran.me/public" target="_blank">LeiyaWellness(BackEnd Focused)</a>
                        </div>
                        </div>                             
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6 mb-3" id="aathiranrcomm">
                        <div className="card shadow">
                        <a href="https://aathiranrcomm.lingeshwaran.me/public" target="_blank">     <img src={aathiranrcomm}  className="card-img-top" alt="LeiyaWellness" /></a>
                        <div className="card-body text-center">
                            <a href="https://aathiranrcomm.lingeshwaran.me/public" target="_blank">LeiyaWellness(BackEnd Focused)</a>
                        </div>
                        </div>                             
                    </div>
                </div>
            </section>
    )
}
export default Portfolio;