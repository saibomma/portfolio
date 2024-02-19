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
import {BsFillPatchCheckFill} from 'react-icons/bs'




const Home = () => {
  
    const coverStyle = {
        position: "relative",
        backgroundColor:"#544C4A",
        
        // backgroundImage: `url(${Cover})`,
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
       
        <h1 style={{marginBottom:'30px', marginTop:'80px',marginLeft:'160px',fontSize: '5em',color:'white'}}>SAI KIRAN BOMMA</h1>
        <div className="homehead">
        <p style={{color:'black',marginRight:'40px',marginLeft:'20px',marginTop:'50px'}}>"As a Software Engineer at Anteros Bio, I apply my extensive knowledge and skills in front-end and back-end development to create dynamic, responsive, and secure applications for the biotechnology industry. 
        I use HTML, CSS, JavaScript, and React to build user-friendly interfaces, and Python, SQL, and AWS to manage data and server-side logic."
        <div className="logo1-container">
        <div className="linkedin-logo1">
        <a href="https://www.linkedin.com/in/saikb1/">
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

      

      <div className="experience__container">

        <div className="experience__frontend">
            <h3>Frontend Development</h3>

            <div className="experience__content">

              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Bootstrap</h4>
                  <small className='text-light'>Beginner</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>ReactJs</h4>
                  <small className='text-light'>Beginner</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>GraphQL</h4>
                  <small className='text-light'>Beginner</small>
                </div>
              </article>
            </div>
        </div>
     {/* End of frontend part */}

        <div className="experience__backend">
            <h3>Backend Development</h3>
            <div className="experience__content">

              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Spring Boot</h4>
                  <small className='text-light'>Beginner</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>MySQL</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>AWS</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Java</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>ExpressJS</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>MongoDB</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
            </div>
        </div>
      </div>
      </div>
    
  

        {/* <div className="skills-container">
        <div className="frontend"> */}
          {/* <h style={{color:'black',fontWeight: 'bold', fontSize: '30px',fontFamily: 'Times New Roman' }}>Front End Development</h> */}
          {/* <div className="frontend-grid">
          
          <img src={Html} alt="html logo" height={50} width={50} style={{margin:'10px'}}/>
          <img src={Css} alt="css logo" height={50} width={50} style={{margin:'10px'}}/>
          <img src={javascript} alt="js logo" height={50} width={50} style={{margin:'5px'}}/>
          <img src={react} alt="react logo" height={50} width={50} style={{margin:'5px'}}/>
          <img src={Bootstrap} alt="bootstrap logo" height={50} width={50} style={{margin:'5px'}}/>
          </div> */}
          
        {/* </div>
        <div className="backend">
           */}
          {/* <h style={{color:'black',fontWeight: 'bold', fontSize: '30px', fontFamily: 'Times New Roman' }}>Back End Development</h> */}
          {/* <div className="backend-grid">
          <img src={sql} alt="sql logo" height={50} width={50} style={{margin:'10px'}}/>
          <img src={postgre} alt="postgre logo" height={50} width={50} style={{margin:'10px'}}/>
          <img src={java} alt="java logo" height={50} width={50} style={{margin:'5px'}}/>
          <img src={springboot} alt="springboot logo" height={50} width={50} style={{margin:'5px'}}/>
          <img src={Docker} alt="docker logo" height={50} width={50} style={{margin:'5px'}}/>
          </div> */}
          

        {/* </div>
        </div> */}

        
        </div>
        </div>
        </>
        
    );
};
 
export default Home;