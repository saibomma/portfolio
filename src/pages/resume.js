import React from "react";
import amazon from "./experience images/amazon.png"
import anteros from "./experience images/anteros.png"


export default function resume(){
    


    return(
        <>
        
        
        <div className="experience-template1">
        <img src={anteros} height={150} width={150} alt="anteros logo"/>
        <div className="anteros">
            <h1>ROLE: SOFTWARE ENGINEER</h1>
            <p style={{color:'white'}}>As a dedicated Software Engineer at Anteros Bio, I leverage my extensive expertise in both front-end and back-end development to design and implement dynamic, responsive, and secure applications for the biotechnology industry. My technical toolkit includes HTML, CSS, JavaScript, and React for creating intuitive user interfaces, while Java, SQL, and AWS enable me to manage data and server-side logic with precision.</p>
            <p style={{color:'white'}}>🔒 Developed a robust authentication system, utilizing AWS Cognito pools to generate and store cookies, and implementing secure access token verification for enhanced application security.</p>
            <p style={{color:'white'}}>🧪 Ensured codebase quality and reliability through comprehensive Jest unit testing, employing effective function mocking and test scenario validation across diverse React files.</p>
            </div>

        </div>
        <div className="experience-template2">
            
            <img src={amazon} height={150} width={120} alt="amazon logo"/>
        
            <div className="amazon">
            <h1>ROLE: SOFTWARE ENGINEER</h1>
            <p style={{color:'white'}}>Results-oriented Software Engineer with a strong background in designing and implementing user interfaces for the Kindle Application, ensuring an immersive reader experience using HTML, Tailwind CSS, Bootstrap, and Typescript. 
                Proven expertise in developing web applications, showcasing proficiency in JSON-based data interchange, AJAX, and RESTful API integration over HTTP protocols. Adept at coding application components in an Agile environment, employing a test-driven development approach to ensure robust and reliable solutions.</p>
            <p style={{color:'white'}}>Demonstrated problem-solving skills through debugging a Java, Spring Boot, and MySQL-based database importer, significantly enhancing application performance during high-demand periods like Prime Day deals. 
                Specialized in developing code for payments and checkout services within a Microservices environment, utilizing React and JavaScript.</p>
            <p style={{color:'white'}}>Innovative contributor to DevOps practices, instrumental in building a CI/CD pipeline with Jenkins on a Kubernetes container environment. Leveraged Kubernetes and Docker to create runtime environments, facilitating the seamless testing and deployment of applications across development and production environments. 
                </p>
            </div>
            
            </div>
        
        
        
        </>

    );
}