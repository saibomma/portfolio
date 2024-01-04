import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Element } from 'react-scroll';
import './App.css';
import Navbar from './Navbar';
import Footer from './footer';
import Home from './pages';
import About from './pages/about'
import Resume from './pages/resume'
import Project from './pages/project'





export default function App(){
   
  

   

   
   
      return (
        
       

       
         <div className = "App">
            <Router>
            <Navbar/>
            
           
      
    
            
            
            
            <Routes>
            <Route 
            exact path="/" 
            element={<>
             <Element name="home">
                <Home />
              </Element>
              <Element name="about">
                <About />
              </Element>
              <Element name="project">
                <Project />
              </Element>
              <Element name="resume">
                <Resume />
              </Element>
              
           </>
            }
            />
            
            </Routes>
            <Footer/>
            </Router>
           
            
           
          
            
            
         </div>
         
         
      );
   }