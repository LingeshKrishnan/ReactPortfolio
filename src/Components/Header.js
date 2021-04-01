import React, {useEffect} from "react";
import Typed from "react-typed";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () =>{
  useEffect(() => {
    AOS.init({
        duration: 2000
    });
  }, []);
  return (
    
    <div className="header-wrapper" data-aos="fade-in">
       
<div className="main-info" >
    <h1 >Welcome to My Portfolio</h1>
  
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