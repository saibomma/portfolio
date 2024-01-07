import React from "react";

export default function projects(){
    const openGitHubLink = () => {
        window.open('https://github.com/saibomma/Pomodoro-Application', '_blank');
      };
    const openGitHubLink1 = () => {
        window.open('https://github.com/saibomma/PasswordManager', '_blank');
      };
      const openGitHubLink2 = () => {
        window.open('https://github.com/saibomma/colour-vocab-website', '_blank');
      };
      const openGitHubLink3 = () => {
        window.open('https://github.com/saibomma/Kanye-West-Quotes', '_blank');
      };
    const openGitHubLink4 = () => {
        window.open('https://github.com/saibomma/graphql-api-from-scratch', '_blank');
      };
      const openGitHubLink5= () => {
        window.open('https://github.com/saibomma/MyPortfolio', '_blank');
      };
    const buttonStyle = {
        padding: '20px 30px',
        backgroundColor: 'grey',
        borderRadius: '10px', 
        margin: '10px'

    };
    const demobuttonStyle = {
        padding: '20px 30px',
        backgroundColor: 'grey',
        borderRadius: '10px',
        margin:'20px',

    };

    return(
        <>
        <div style={{backgroundColor:'lightgreen', height:'150vh'}}>
        <div className="projects-container">
        <div className="project1">
            <h1>POMODORO APPICATION</h1>
            <p>Developed Pomodoro Application using Pycharm,Tkinter and Python Programming. I have used the Integrated Development Environment like Pycharm to write the code in Python Programming and executed the application using Tkinter which is a Python GUI Kit. </p>
            <button style={buttonStyle} onClick={openGitHubLink}>Github</button>
            <button style={demobuttonStyle}>LiveDemo</button>
        </div>
        <div className="project2">
        <h1>PASSWORD MANAGER</h1>
        <p>Password Manager is a secure application to store your passwords for the various websites a user has access to on a daily basis. Using Password Manager user can secure the passwords in a personal database file and have access to the passwords without any security obligations. 
          </p>
          <button style={buttonStyle} onClick={openGitHubLink1}>Github</button>
        <button style={demobuttonStyle}>LiveDemo</button>
        </div>
        <div className="project3">
        <h1>COLOUR-VOCAB-WEBSITE</h1>
        <p> The purpose of this website is to learn the colours in spanish. I have used HTML5 and CSS to build the application. In this project i used css3 to style each of the color titles to meaning.Happy Learning Colours in Spanish!</p>
        <button style={buttonStyle} onClick={openGitHubLink2}>Github</button>
        <button style={demobuttonStyle}>LiveDemo</button>
        </div>
        </div>
        <div className="projects-container1">
        <div className="project4">
        <h1>KANYE WEST QUOTES</h1>
        <p> In this project i made the request to Kanye Rest API and raise an exception if the request returned an unsuccessful status code. Parse the JSON to obtain the quote text and display the quote in Canvas widget.</p>
        <button style={buttonStyle} onClick={openGitHubLink3}>Github</button>
        <button style={demobuttonStyle}>LiveDemo</button>
        </div>
        <div className="project5">
        <h1>GRAPHQL API FROM SCRATCH</h1>
        <p>In this project i worked on building an API based on GraphQL, which involves the main characteristics of GraphQL. To carry out this project i used typescript and to build the API i made use of apollo server package.</p>
        <button style={buttonStyle} onClick={openGitHubLink4}>Github</button>
        <button style={demobuttonStyle}>LiveDemo</button>
        </div>
        <div className="project6">
        <h1>MY PORTFOLIO</h1>
        <p>In this project i developed my own portfolio with react framework and utilized front end technologies such HTML5, CSS and Javascript. In this project I developed Single Page Application utilizing react hooks, props for state management and defined functionalities for the user interaction.</p>
        <button style={buttonStyle} onClick={openGitHubLink5}>Github</button>
        <button style={demobuttonStyle}>LiveDemo</button>
        </div>
        </div>
        </div>

       
        

        
        </>

    );
}