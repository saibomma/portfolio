import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



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
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/project" element={<Project />} />
            
            </Routes>
            <Footer/>
            </Router>
           
            
           
          
            
            
         </div>
         
         
      );
   }