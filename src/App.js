import './css/App.css';
//Import Pages
import Contact from './pages/Contact'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Projects from './pages/Projects'
//import Components
import Nav from './Components/Nav'
//Import Libraries
import React, { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body classsName = "body">
        <Nav />
        <Pages />
      </body>
    </div>
  );
}


function Pages(){
  return(
    <div class = "page">  
      <div id = "home" class = "home"> 
        <Home />      
      </div>   
        <Projects />
      <div id = "about" class = "about">
        <AboutMe /> 
      </div>  
      <div id = "contact" class = "contact"> 
        <Contact />
      </div>  
    </div>
  )
}

export default App;
