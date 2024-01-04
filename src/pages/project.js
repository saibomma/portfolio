import React from "react";

export default function projects(){
    const buttonStyle = {
        padding: '20px 30px',
        backgroundColor: 'grey',
        borderRadius: '10px', 
        margin: '15px'

    };
    const demobuttonStyle = {
        padding: '20px 30px',
        backgroundColor: 'grey',
        borderRadius: '10px',
        margin:'20px',

    };

    return(
        <>
        <div style={{backgroundColor:'orange', height:'150vh'}}>
        <h style={{color:'black',fontWeight: 'bold', fontSize: '40px'}}>PROJECTS</h>
        <div className="projects-container">
        <div className="project1">
            <h1>POMODORO APPICATION</h1>
            <p>Developed Pomodoro Application using Pycharm,Tkinter and Python Programming. I have used the Integrated Development Environment like Pycharm to write the code in Python Programming and executed the application using Tkinter which is a Python GUI Kit. I have also imported various modules from pandas and stored the data of the application users in a database.</p>
            <button style={buttonStyle}>Github</button>
            <button style={demobuttonStyle}>LiveDemo</button>
        </div>
        <div className="project2">
        <h1>PASSWORD MANAGER</h1>
        <p>Password Manager is a secure application to store your passwords for the various websites a user has access to on a daily basis. Using Password Manager user can secure the passwords in a personal database file and have access to the passwords without any security obligations. 
          </p>
          <button style={buttonStyle}>Github</button>
        <button style={demobuttonStyle}>LiveDemo</button>
        </div>
        <div className="project3">
        <h1>COLOUR-VOCAB-WEBSITE</h1>
        <button style={buttonStyle}>Github</button>
        <button style={demobuttonStyle}>LiveDemo</button>
        </div>
        </div>
        <div className="projects-container1">
        <div className="project4">
        <h1>KANYE WEST QUOTES</h1>
        <button style={buttonStyle}>Github</button>
        <button style={demobuttonStyle}>LiveDemo</button>
        </div>
        <div className="project5">
        <h1>GRAPHQL API FROM SCRATCH</h1>
        <button style={buttonStyle}>Github</button>
        <button style={demobuttonStyle}>LiveDemo</button>
        </div>
        <div className="project6">
        <h1>MY PORTFOLIO</h1>
        <button style={buttonStyle}>Github</button>
        <button style={demobuttonStyle}>LiveDemo</button>
        </div>
        </div>
        </div>

       
        

        
        </>

    );
}