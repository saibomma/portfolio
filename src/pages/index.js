import React from "react";
import Cover from "./images/beach.jpg"
import Html from "./images/html.png"
import Css from "./images/css3.png"
import react from "./images/react.png"
import javascript from "./images/js.png"
import sql from "./backendimages/sql.png"
import postgre from "./backendimages/postgre.png"
import java from "./backendimages/java.png"
import springboot from "./backendimages/spring-boot.png"
import profile from "./images/profile.jpg"
import Github from "./images/github.png"
import Linkedinimage from "./images/linkedinimage.jpg"
import Medium from "./images/medium.png"
import Calendly from "./images/calendly.png"
import Docker from "./backendimages/docker.png"
import Bootstrap from "./images/bootstrap.png"




const Home = () => {
  
    const coverStyle = {
        position: "relative",
        backgroundImage: `url(${Cover})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "black",
        height: "150vh",
        display: "flex",
        flexDirection: "column",
        
        
        

      };
      const textOverlayStyle = {
        position: "absolute",
        textAlign: "center",
        zIndex: 1, // Ensure the text appears above the image
      };
      const buttonStyle = {
        backgroundColor: 'green',
        color: 'white', // White text color
        padding: '20px 30px', // Padding around the text
        border: 'none', // Remove default button border
        borderRadius: '10px', // Add some border radius for a rounded look
        cursor: 'pointer', 
        marginLeft: '200px',
        marginBottom: '20px',
        
      };
      
        const resumeUrl = 'https://github.com/saibomma/resume/raw/main/Resume.pdf';
      
        const handleButtonClick = () => {
          window.open(resumeUrl, '_blank');
        };
    
      
    return (
      <>
        <div style={coverStyle}>
        <div style={textOverlayStyle}>
       
        <h1 style={{marginBottom:'30px', marginTop:'80px',marginLeft:'160px',fontSize: '5em' }}>SAI KIRAN BOMMA</h1>
        <div className="homehead">
        <p style={{color:'black',marginRight:'40px',marginLeft:'20px',marginTop:'50px'}}>"As a Software Engineer at Anteros Bio, I apply my extensive knowledge and skills in front-end and back-end development to create dynamic, responsive, and secure applications for the biotechnology industry. 
        I use HTML, CSS, JavaScript, and React to build user-friendly interfaces, and Python, SQL, and AWS to manage data and server-side logic."
        <div className="logo1-container">
        <div className="linkedin-logo1">
        <a href="https://www.linkedin.com/in/bomma/">
        <img src={Linkedinimage} height={40} width={40} alt="linkedin logo"/>
        </a>
        </div>
        <div className="github-logo1">
        <a href="https://github.com/saibomma">
        <img src={Github} height={40} width={40} alt="github logo"/>
        </a>
        </div>
        <div className="calendly-logo1">
        <a href="https://calendly.com/saikiranreddy-b1995">
        <img src={Calendly} height={40} width={40} alt="calendly logo"/>
        </a>
        </div>
        <div className="medium-logo1">
        <a href="https://medium.com/@saikiranreddy.b1995/about">
        <img src={Medium} height={40} width={40} alt="Medium logo"/>
        </a>
        </div>
        </div>
        </p>
        <img src={profile} alt="laptop pic" height={300} width={300} style={{borderRadius:'300px'}}/>

        </div>
        <button style={buttonStyle} onClick={handleButtonClick}> VIEW MY RESUME</button>
        <div className="skills-container">
        <div className="frontend">
          <h style={{color:'black',fontWeight: 'bold', fontSize: '30px',fontFamily: 'Times New Roman' }}>Front End Development</h>
          <div className="frontend-grid">
          
          <img src={Html} alt="html logo" height={50} width={50} style={{margin:'10px'}}/>
          <img src={Css} alt="css logo" height={50} width={50} style={{margin:'10px'}}/>
          <img src={javascript} alt="js logo" height={50} width={50} style={{margin:'5px'}}/>
          <img src={react} alt="react logo" height={50} width={50} style={{margin:'5px'}}/>
          <img src={Bootstrap} alt="bootstrap logo" height={50} width={50} style={{margin:'5px'}}/>
          </div>
          
        </div>
        <div className="backend">
          
          <h style={{color:'black',fontWeight: 'bold', fontSize: '30px', fontFamily: 'Times New Roman' }}>Back End Development</h>
          <img src={sql} alt="sql logo" height={50} width={50} style={{margin:'50px'}}/>
          <img src={postgre} alt="postgre logo" height={50} width={50} style={{margin:'50px'}}/>
          <img src={java} alt="java logo" height={50} width={50} style={{margin:'20px'}}/>
          <img src={springboot} alt="springboot logo" height={50} width={50} style={{margin:'20px'}}/>
          <img src={Docker} alt="docker logo" height={50} width={50} style={{margin:'20px'}}/>
          

        </div>
        </div>

        
        </div>
        </div>
        </>
        
    );
};
 
export default Home;