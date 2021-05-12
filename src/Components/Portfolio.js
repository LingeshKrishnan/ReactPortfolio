import React from "react";
import wut from "../edu.jpg";

const Portfolio = () => {
    return (
           <section className="Portfolio" id="Portfolio">
               <div className="card-columns">

                        <div className="card">
                                <div className="card-body">
                                      <img src={wut}></img>
                                </div>
                                <div className="card-footer text-center">
                                      <a href="www.algebraconsultants.in" target="_blank">Link Here</a>
                                </div>

                        </div>
                  


                        <div className="card">
                                <div className="card-body">
                                      <img src={wut}></img>
                                </div>
                                <div className="card-footer text-center">
                                      <a href="www.algebraconsultants.in" target="_blank">Link Here</a>
                                </div>

                        </div>
                  


                        <div className="card">
                                <div className="card-body">
                                      <img src={wut}></img>
                                </div>
                                <div className="card-footer text-center">
                                      <a href="www.algebraconsultants.in" target="_blank">Link Here</a>
                                </div>

                        </div>
                  
                        
                </div>

           </section>
    )
}
export default Portfolio;