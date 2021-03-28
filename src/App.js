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
  const tNav = 700;
  const tLogo = 900;
  const[isToggleOn, setToggle] = useState((window.innerWidth>tNav)? true : false);
  const[logoOn, toggleLogo] = useState((window.innerWidth>tLogo)? true : false);
  window.addEventListener('resize', ()=>{
    console.log()
    toggleLogo((window.innerWidth>tLogo)? true: false);
    setToggle((window.innerWidth>tNav)? true: false);
  })
  return(
  <div class = "nav">
    <div class ="logo"> <a href = "#home">CONNOR {(logoOn) ? <span href = "#">GUARD</span>: null} </a> </div> 
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
      <div id = "home" class = "home"> 
        <Intro />      
      </div>   
      <div id = "proj" class = "projects"> 
      </div>  
      <div id = "about" class = "about"> 
      </div>  
      <div id = "contact" class = "contact"> 
        <Contact />
      </div>  
    </div>
  )
}

function Contact(){
  return(
  <div class = "contact-form">
    <form id = "contact-form" method = "post" action="">
    <input type="text" name="name" placeholder = "name" />
    <input type="email" name="email" placeholder = "email" />
    <textarea name = "message" class ="form-control" placeholder = "message" row = "4" required></textarea>
    <input class = "button" id = "submit" type="submit" value="SUBMIT" />
    </form>
    <Socials />
  </div>
  )
}

function Socials(){
  return(
  <div class = "Socials">
     <a href = "https://www.linkedin.com/in/connor-guard/"><img class = "icon linkedin" src="./linkedin.png" height = "50" widh="50"></img></a>
    <a href = "https://github.com/ConnorGuard"><img class = "icon github" src="./github.png" height = "50" widh="50"></img></a>
    <a href = "mailto: connor.guard@gmail.com"><img class = "icon email" src="./email.png" height = "31" widh="31"></img></a>
  </div>
  );
}

function Intro(){
  return(
    <div class ="homePage">
      <h2>Software<br/> Developer<br/>at QUT</h2>
      <img class = "image connor" src="./connor.jpeg" ></img>
    </div>
  );
}

export default App;
