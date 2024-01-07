import React from "react";
import Profile from "./images/profile.png"
import Calender from "./images/calendar.png"
import Phone from "./images/phone.png"
import Gmail from "./images/gmail.png"
import Home from "./images/home.png"







export default function About(){
 
    
    
  
    
    return(
        <>
         <div style={{ 
      height: '50vh',
      
      
     
      background: 'skyblue', 
      
    }}>
        </div>
       
         <div className="intro-template">
            
            
            <img src={Profile} height={300} width={300} alt="profile pic" />
            <h3>HELLO EVERYONE, I AM</h3>
            <h1>SAI KIRAN BOMMA</h1>
            <h2>SOFTWARE ENGINEER</h2>
            <p>"Distinguished Software Engineer with 5+ years of experience renowned for crafting and implementing resilient web and e-commerce applications, with expertise in Front-End  development, API Design, Database Management, Java, CI/CD, and AWS Cloud Services"</p>
            <div className="logo">
            <img src={Calender} height={50} width={50} alt="calendar logo" />
            <h className="text1">20TH July,1995</h>
            </div>
            
            <div className="logo1">
            <img src={Phone} height={50} width={50} alt="Phone logo" />
            <h className="text2">+1 269-220-4138</h>
            
            </div>
            <div className="logo2">
            <img src={Gmail} height={50} width={50} alt="Gmail logo" />
            <h className="text3">saikiranreddy.b1995@gmail.com</h>
            </div>
            <div className="logo3">
            <img src={Home} height={50} width={50} alt="Home logo" />
            <h className="text4">Nashua,NH</h>
            </div>
            
            </div>
        
      
        
        
      
    
      
      
     
   
        
      
        
        
        
        </>

    );
}
