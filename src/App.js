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
        <Projects />
      </div>  
      <div id = "about" class = "about">
        <AboutMe /> 
      </div>  
      <div id = "contact" class = "contact"> 
        <Contact />
      </div>  
    </div>
  )
}
function Projects(){
  const[p2On, toggleP2] = useState(false);
  return(  
    <div>
      {(p2On) ? <TinkerCad exit = {p2On} toggle = {toggleP2}  /> : null}
      <div class="grid-projects">
        <div class ="p1">
          <p>Game Of Life<br></br>&nbsp;</p>
          <button class = "button" onClick={() => {}}> Launch</button>
          <a href = "" target="popup"> GitHub </a>
          <p2><br></br>C#</p2>
        </div>
        <div class ="p2">
          <p>Pattern Matching Arduino Game</p>
          <button class = "button" onClick={() => {toggleP2(!p2On)}}> Launch</button>
          <a href = "https://github.com/ConnorGuard/PatternMatchGameArduino" target="popup"> GitHub </a>
          <p2><br></br>C</p2>
        </div>
        <div class ="p3">
          <p>Asset Trading<br></br>Platform</p>
          <button class = "button" onClick={() => {}}> Launch</button>
          <a href = "" target="popup"> GitHub </a>
          <p2><br></br>Java, SQL</p2>
        </div>  
        <div class ="p4">
        <p>Web Computing<br></br>Project</p>
          <button class = "button" onClick={() => {}}> Launch</button>
          <a href = "" target="popup"> GitHub </a>
          <p2><br></br>React.JS, HTML, CSS, SQL</p2>
        </div>
       <div class ="p5">
       <p>Portfolio<br></br>Website</p>
          <button class = "button" onClick={() => {}}> Launch</button>
          <a href = "" target="popup"> GitHub </a>
          <p2><br></br>React.JS, HTML, CSS</p2>
       </div>
        <div class ="p6"></div>
       <div class ="hideProject">7</div>
        <div class ="hideProject">8</div>
        <div class ="hideProject">9</div>
      </div>
    </div>
  
)
}

function TinkerCad(props){
  return(
    <div class = "tinkerCad">
      <button class = "button" onClick={() => {props.toggle(!props.exit)}}> Exit</button>
      <iframe class = "game" width="725" height="453" 
        src="https://www.tinkercad.com/embed/8nOrSGffqya?editbtn=1" 
        frameborder="0" marginwidth="0" marginheight="0" scrolling="no">
      </iframe>
    </div>);
}

function AboutMe(){
  return(
    <div class = "aboutme">

    </div>
  );
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
     <a href = "https://www.linkedin.com/in/connor-guard/" target="popup"><img class = "icon linkedin" src="./linkedin.png" height = "50" widh="50"></img></a>
    <GitHub />
    <a href = "mailto: connor.guard@gmail.com" target="popup"><img class = "icon email" src="./email.png" height = "31" widh="31"></img></a>
  </div>
  );
}

function GitHub(){
  return(
    <a class = "github" href = "https://github.com/ConnorGuard"><img class = "icon github" src="./github.png" height = "50" widh="50" target="popup"></img></a>
  )
}

function Intro(){
  return(
    <div>
    <div class ="homePage">
      <h2>Software<br/> Developer<br/>at QUT</h2>
      <div class="image-cropper">
        <img class = "image connor" src="./connor.jpg" ></img>
      </div>
    </div>
    <div class ="toProjects">
      <button onClick={() => {window.location.href='#proj';}}>Learn More</button>
      <img src="./downArrow.png" onClick={() => {window.location.href='#proj';}} height = "50" widh="50"></img>
    </div>
    </div> 
  );
}

export default App;
