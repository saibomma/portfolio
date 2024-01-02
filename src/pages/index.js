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




const Home = () => {
    const coverStyle = {
        position: "relative",
        backgroundImage: `url(${Cover})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "yellow",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        
        
        

      };
      const textOverlayStyle = {
        position: "absolute",
        textAlign: "center",
        zIndex: 1, // Ensure the text appears above the image
      };
      const buttonStyle = {
        backgroundColor: '#4CAF50', // Green background color
        color: 'white', // White text color
        padding: '20px 30px', // Padding around the text
        border: 'none', // Remove default button border
        borderRadius: '10px', // Add some border radius for a rounded look
        cursor: 'pointer', 
        marginLeft: '200px',
        marginBottom: '20px',
        
      };
    
      const handleButtonClick = () => {
        console.log('hi');
      };
    return (
      <>
        <div style={coverStyle}>
        <div style={textOverlayStyle}>
       
        <h1 style={{marginBottom:'30px', marginTop:'50px',marginLeft:'150px'}}>Hi! I'm Sai Kiran Bomma</h1>
        <div className="homehead">
        <p style={{color:'black'}}>"As a Software Engineer at Anteros Bio, I apply my extensive knowledge and skills in front-end and back-end development to create dynamic, responsive, and secure applications for the biotechnology industry. 
        I use HTML, CSS, JavaScript, and React to build user-friendly interfaces, and Python, SQL, and AWS to manage data and server-side logic."</p>

        </div>
        <button style={buttonStyle} onClick={handleButtonClick}> VIEW MY RESUME</button>
        <div className="skills-container">
        <div className="frontend">
          <h style={{color:'black',fontWeight: 'bold', fontSize: '30px',fontFamily: 'Times New Roman' }}>Front End Development</h>
          <img src={Html} alt="html logo" height={50} width={50} style={{margin:'50px'}}/>
          <img src={Css} alt="css logo" height={50} width={50} style={{margin:'50px'}}/>
          <img src={javascript} alt="js logo" height={50} width={50} style={{margin:'20px'}}/>
          <img src={react} alt="react logo" height={50} width={50} style={{margin:'20px'}}/>
        </div>
        <div className="backend">
          
          <h style={{color:'black',fontWeight: 'bold', fontSize: '30px', fontFamily: 'Times New Roman' }}>Back End Development</h>
          <img src={sql} alt="sql logo" height={50} width={50} style={{margin:'50px'}}/>
          <img src={postgre} alt="postgre logo" height={50} width={50} style={{margin:'50px'}}/>
          <img src={java} alt="java logo" height={50} width={50} style={{margin:'20px'}}/>
          <img src={springboot} alt="springboot logo" height={50} width={50} style={{margin:'20px'}}/>
          
          

        </div>
        </div>

        
        </div>
        </div>
        </>
        
    );
};
 
export default Home;