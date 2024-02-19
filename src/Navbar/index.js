import React from "react";
import { NavLink } from "./NavbarElements";
import styled from 'styled-components';
import Home from "./images/home.png"





const NavbarContainer = styled.div`
 
  
 
  position: fixed;
  top: 0;
  
  
  width: 100%;
  z-index: 1000;
  
`;


export default function Navbar(){
    return(
        <>
       
            
        

       
       
       <NavbarContainer>
        <div className="title">

        <NavLink to="home" spy={true} smooth={true} offset={-70} duration={500}>
        <img src={Home} height={40} width={40} alt="home logo" />
        </NavLink>

        <NavLink to="about" spy={true} smooth={true}  duration={500}>
        <h1 className="About">ABOUT</h1>
        </NavLink>

        <NavLink to="project" spy={true} smooth={true}  duration={300}>
        <h1 className="About">PROJECTS</h1>
        </NavLink>
        <NavLink to="blog" smooth={true} duration={500}>
        <h1 className="About">BLOG</h1>
        </NavLink>

      <NavLink to="resume" spy={true} smooth={true}  duration={500}>
      <h1 className="resume">EXPERIENCE</h1>
      </NavLink>
       
        
        
        {/* <NavLink to="/"><img src={Home} height={40} width={40} alt="home logo"/></NavLink>
        
        
        <NavLink to="/about" ><h1 className="About">ABOUT</h1>
                        
                    </NavLink>
        <NavLink to="/project" ><h1 className="About">PROJECTS</h1>
                        
                    </NavLink>
        <NavLink to="/resume" ><h1 className="resume">EXPERIENCE</h1>
                        
                    </NavLink> */}
       
        {/* <div className="linkedin-logo">
        <a href="https://www.linkedin.com/in/bomma/">
        <img src={Linkedinimage} height={40} width={40} alt="linkedin logo"/>
        </a>
        </div>
        <div className="github-logo">
        <a href="https://github.com/saibomma">
        <img src={Github} height={40} width={40} alt="github logo"/>
        </a>
        </div> */}
       
        
       
        
       


        </div>
        </NavbarContainer>
       
        
        </>
    );
}
