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

const useMove = () => {
  const [state, setState] = useState({x: 0, y: 0})

  const handleMouseMove = e => {
    e.persist()
    setState(state => ({...state, x: e.clientX, y: e.clientY}))
  }
  return {
    x: state.x,
    y: state.y,
    handleMouseMove,
  }
}

function Description(props){
  return(
    <div class ="describe" id = "des" style = {{left: props.x+20, top: props.y+20}}>
      {props.describe}
    </div>
  )
}

const decribeGOL = () =>{
  return(
    <p>
      The Game of Life, 
      is a cellular automaton devised by John Horton Conway.
      Its evolution is determined by its initial state.
      The player creates an initial configuration and 
      observes how it evolves. 
    </p>
  )
}

const decribeATP = () =>{
  return(
    <p>
      Digital assets in capital markets are assets issued and transferred using blockchain.
      A digital asset is a representation of the resource in digital format.
      This means the asset can change owners through digital trading.
    </p>
  )
}

function Projects(){
  const[p2On, toggleP2] = useState(false);
  const[pWebOn, togglepWeb] = useState(false);
  const[hovering, setHover] = useState(false);
  const[describe, getdescription] = useState();
  const {x, y, handleMouseMove} = useMove();
  console.log(hovering)
  return(  
    <div onMouseMove={handleMouseMove}>
      {(p2On) ? <TinkerCad exit = {p2On} toggle = {toggleP2}  /> : null}
      {(pWebOn) ? <Portfolio exit = {pWebOn} toggle = {togglepWeb}  /> : null}
      <div class="grid-projects" id="g-proj" >

          {(hovering) ? <Description x={x} y={y} describe = {describe}/> : null} 

          <div class ="p1" onMouseEnter = {()=>{setHover(true); getdescription(decribeGOL);}} onMouseLeave = {()=>{setHover(false)}}>
            <p>Game Of Life<br></br>&nbsp;</p>
            <button class = "button" onClick={() => {}}> Launch</button>
            <a href = "https://github.com/ConnorGuard/Conways-Game-of-life" target="popup"> Github </a>
            <p2><br></br><br></br>C#</p2>
          </div>

        <div class ="p2" onMouseEnter = {()=>{setHover(true); getdescription(decribeATP);}} onMouseLeave = {()=>{setHover(false)}}>
            <p>Asset Trading<br></br>Platform</p>
            <button class = "button" onClick={() => {}}> Launch</button>
            <a href = "" target="popup"> Github </a>
            <p2><br></br><br></br>Java &nbsp; SQL</p2>
        </div>

        <div class ="p3" onMouseEnter = {()=>{setHover(true)}} onMouseLeave = {()=>{setHover(false)}}>
          <p>Portfolio<br></br>website</p>
          <button class = "button" onClick={() => {togglepWeb(!pWebOn)}}> Launch</button>
          <a href = "https://github.com/ConnorGuard/Portfolio-Connor-Guard" target="popup"> Github </a>
          <p2><br></br><br></br>React.JS &nbsp; HTML &nbsp; CSS</p2>
        </div>  

        <div class ="p4" onMouseEnter = {()=>{setHover(true)}} onMouseLeave = {()=>{setHover(false)}}>
          <p>Web Computing<br></br>Project</p>
          <button class = "button" onClick={() => {}}> Launch</button>
          <a href = "" target="popup"> Github </a>
          <p2><br></br><br></br>React.JS &nbsp; HTML &nbsp; CSS &nbsp;  SQL</p2>
        </div>

       <div class ="p5" onMouseEnter = {()=>{setHover(true)}} onMouseLeave = {()=>{setHover(false)}}>
          <p>Pattern Matching Arduino Game</p>
          <button class = "button" onClick={() => {toggleP2(!p2On)}}> Launch</button>
          <a href = "https://github.com/ConnorGuard/PatternMatchGameArduino" target="popup"> Github </a>
          <p2><br></br><br></br>C</p2>
       </div>

        <div class ="p6" onMouseEnter = {()=>{setHover(true)}} onMouseLeave = {()=>{setHover(false)}}>
          <p>Raspberry Pi<br></br>challenge</p>
          <button class = "button" onClick={() => {}}> Launch</button>
          <a href = "https://github.com/ConnorGuard/IdeaPi" target="popup"> Github </a>
          <p2><br></br><br></br>Python</p2>
        </div>

       <div class ="hideProject">7</div>
        <div class ="hideProject">8</div>
        <div class ="hideProject">9</div>
      </div>
    </div>
  
)
}
function Portfolio(props){
  return(
    <div class = "display-proj portfolio">
      <button class = "button" onClick={() => {props.toggle(!props.exit)}}> Exit</button>
      <iframe class = "webSite" width="725" height="453" 
        src="http://localhost:3000" 
        frameborder="0" marginwidth="0" marginheight="0" scrolling="no">
      </iframe>
    </div>
  )
}
function TinkerCad(props){
  return(
    <div class = "display-proj tinkerCad">
      <button class = "button" onClick={() => {props.toggle(!props.exit)}}> Exit</button>
      <iframe class = "game" width="725" height="453" 
        src="https://www.tinkercad.com/embed/8nOrSGffqya?editbtn=1" 
        frameborder="0" marginwidth="0" marginheight="0" scrolling="no">
      </iframe>
    </div>);
}

function AboutMe(){
  return(
    <div class="about-container">
      <div class ="about-left">
        <div class = "info-left">
          <img class = "connorimg" src="connorAbout.jpg"></img>
          <p href = "#contact">Available for work</p>
          <button class ="button"onClick={() => {} }>My resume</button>
          <button class ="button"onClick={() => {window.location.href='#contact';} }>Lets work</button>
        </div>
      </div>
      <div class = "aboutme-container">
        <div class ="aboutme-content">
          <h1>I'm Connor Guard, a Fullstack Web and Software Developer</h1>
          <h3>Get to know me</h3>
          <p>
            I’m a software developer based in Brisbane, Australia. 
            I have been building software applications for 6 years. 
            With this knowledge, I convert ideas into reality 
            by creating meaningful and useful software.
            I'm in my second year of a Computer Science degree at Queensland University of Technology.
            Take a look at my portfolio work and let’s see if we can work together.
          </p>
          <p>
            Here are a few technologies I've been working with recently:
            <ul class = "skills-list">
            <ul>JavaScript</ul> 
            <ul>React</ul>
            <ul>C#</ul>
            <ul>Java</ul>
            <ul> Node.js</ul>
            </ul>
          </p>
        </div>  
      </div>
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
    <p><br></br><br></br><br></br>Designed & Built by Connor Guard</p>
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
    <a class = "github" href = "https://github.com/ConnorGuard" target="popup"><img class = "icon github" src="./github.png" height = "50" widh="50" target="popup"></img></a>
  )
}

function Intro(){
  return(
    <div>
    <div class ="homePage">
      <h2>Software<br/> Developer<br/>at QUT</h2>
        <div class="image-cropper">
          <a href = "#about"><img class = "image connor" src="./connor.jpg" ></img></a>
        </div>
    </div>
    <div class ="toProjects">
      <button onClick={() => {window.location.href='#proj';}}>Projects</button>
      <img src="./downArrow.png" onClick={() => {window.location.href='#proj';}} height = "50" widh="50"></img>
    </div>
    </div> 
  );
}

export default App;
