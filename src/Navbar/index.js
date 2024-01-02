import React from "react";
import { NavLink } from "./NavbarElements";
import Linkedinimage from "./images/linkedinimage.jpg"
import Home from "./images/home.png"
import Github from "./images/github.png"






export default function Navbar(){
    return(
        <>
       
            
        

       
       
    
        <div className="title">
       
        
        
        <NavLink to="/"><img src={Home} height={40} width={40} alt="home logo"/></NavLink>
        
        
        <NavLink to="/about" ><h1 className="About">ABOUT</h1>
                        
                    </NavLink>
        <NavLink to="/project" ><h1 className="About">PROJECTS</h1>
                        
                    </NavLink>
        <NavLink to="/resume" ><h1 className="resume">EXPERIENCE</h1>
                        
                    </NavLink>
       
        <div className="linkedin-logo">
        <a href="https://www.linkedin.com/in/bomma/">
        <img src={Linkedinimage} height={40} width={40} alt="linkedin logo"/>
        </a>
        </div>
        <div className="github-logo">
        <a href="https://github.com/saibomma">
        <img src={Github} height={40} width={40} alt="github logo"/>
        </a>
        </div>
       
        
       
        
       


        </div>
       
        
        </>
    );
}
