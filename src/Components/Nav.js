import React, { useEffect, useState } from 'react';
import './../css/nav.css';
export default Nav;

function Nav(){
    const tNav = 800;
    const tLogo = 900;
    const[isToggleOn, setToggle] = useState((window.innerWidth>tNav)? true : false);
    const[hideBtn, setBtn] = useState((window.innerWidth>tNav)? false : true);
    const[logoOn, toggleLogo] = useState((window.innerWidth>tLogo)? true : false);
    window.addEventListener('resize', ()=>{
      console.log()
      toggleLogo((window.innerWidth>tLogo)? true: false);
      setBtn((window.innerWidth>tNav)? false: true);
      setToggle((window.innerWidth>tNav)? true: false);
    })


    return(
    <div >
      <div class ="logo"> <a href = "#home">CONNOR {(logoOn) ? <span href = "#">GUARD</span>: null} </a> </div> 
      <div class = "nav" >
      <div class = "content"> 
      {(hideBtn)?   <a class = "toggle-button" onClick={() => {setToggle(!isToggleOn)}}>
          <span class ="bar"></span>
          <span class ="bar"></span>
          <span class ="bar"></span>
        </a>: null}
    
        {(isToggleOn) ? <Navbuttons /> : null}
      </div>
      </div>
    </div>
  )
  }
  function Navbuttons(){
      return(  
      <nav class = "nav-buttons">
        <button class = "button home" onClick={() => {window.location.href='#home';} }>HOME </button>
        <button class = "button projects" onClick={() => {window.location.href='#proj';}}>PROJECTS</button>
        <button class = "button about" onClick={() => {window.location.href='#about';}}>ABOUT</button>
        <button class = "button contact" onClick={() => {window.location.href='#contact';}}> CONTACT </button>
        <a href="https://drive.google.com/file/d/1LZJ27QxnK6YilP6gt8VT02HrJ2bkhauh/view" target="_blank"><button class = "button resume"> RESUME </button></a>
      </nav>)
  }
