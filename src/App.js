
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Particles from "react-particles-js";
import Experience from "./Components/Experience/Experience";
import Divider from "./Components/divider";
import Contact from "./Components/Contact/Contact"
import Portfolio from "./Components/Portfolio/Portfolio";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';


function App() {
  return (
    <>
    <Router>
    
     <Particles 
                params = {
                    {
                        particles : {
                            number :{
                                value : 50,
                                density : {
                                    enable : true,
                                   value_area : 900
                                }
                            },
                            color : {
                              value : '#ffff'
                            },
                            opacity : {
                              value : 0.5,
                              anim : {
                                enable : true,
                              }
                            },
                            size : {
                              value : 2,
                            random : true,
                            anim : {
                              enable : true,
                              speed : 3
                            }
                            },
                            move : {
                              speed : 5
                            }
                           
                        }
                    }
                }
       />
    <Navbar />
    {/* <Certificate /> */}
    <Header />
  
    <Home />
    
    <Contact/>
    <Routes> 

        <Route path="/portfolio" element ={
            <Portfolio />
        }>
        </Route>
    </Routes>
    </Router>
    </>
  );
}

export default App;
