import React from "react";
import Typed from "react-typed";



const Header = () =>{
    return (
    <div className="header-wrapper">
<div className="main-info">
    <h1>Welcome to My Portfolio</h1>
  
        <Typed
        className="typed-text"
        strings={["Hi, There","Welcome To My Page","Check out","My work and","Hire me","If you like my work"]}
        typeSpeed={40}
        backSpeed={70}
        loop
        />
            
  
    
    </div>
    </div>
    )
}

 
export default Header