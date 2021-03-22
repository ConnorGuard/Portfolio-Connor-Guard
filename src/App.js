import './css/App.css';
import './animations.js';
import React, { useEffect, useState } from 'react';
const author = {
  FirstName: 'Connor', 
  LastName: 'Guard'
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body classsName = "body">
        <Nav />
        <Page />
      </body>
    </div>
  );
}

function Nav(){
  const tNav = 900;
  const[isToggleOn, setToggle] = useState((window.innerWidth>tNav)? true : false);
  const[logoOn, toggleLogo] = useState((window.innerWidth>550)? true : false);
  window.addEventListener('resize', ()=>{
    console.log()
    toggleLogo((window.innerWidth>550)? true: false);
    setToggle((window.innerWidth>tNav)? true: false);
  })
  return(
  <div class = "nav">
    <div class ="logo"> <a href = "#">CONNOR {(logoOn) ? <span href = "#">GUARD</span>: null} </a> </div> 
    <div class = "content"> 
      <a class = "toggle-button" onClick={() => {setToggle(!isToggleOn)}}>
        <span class ="bar"></span>
        <span class ="bar"></span>
        <span class ="bar"></span>
      </a>
      {(isToggleOn) ? <Navbuttons /> : null}
    </div>
  </div>
)
}

function Navbuttons(){
    return(  
    <nav class = "nav-buttons">
      <button class = "button home bouncy" onClick={() => {window.location.href='#home';} }>HOME </button>
      <button class = "button projects bouncy" onClick={() => {window.location.href='#proj';}}>PROJECTS</button>
      <button class = "button about bouncy" onClick={() => {window.location.href='#about';}}>ABOUT</button>
      <button class = "button contact bouncy" onClick={() => {window.location.href='#contact';}}> CONTACT </button>
    </nav>)
}
function Page(props){
  return(
    <div class = "page">  
      <div id = "home" class = "page home"> 
        <div class = "greeting">
          <h2>I am a Software Developer</h2>
        </div>   
          <img src = "images/noGlass.jpg"></img>
         
      </div>   
      <div id = "proj" class = "page projects"> 
        <h2>Projects</h2> 
      </div>  
      <div id = "about" class = "page about"> 
        <h2>About</h2> 
      </div>  
      <div id = "contact" class = "page contact"> 
        <h2>Contact</h2> 
      </div>  
    </div>
  )
}

export default App;
