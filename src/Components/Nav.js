import React, { useEffect, useState } from 'react';

export default Nav;

function Nav(){
    const tNav = 700;
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
    <div class = "nav">
      <div class ="logo"> <a href = "#home">CONNOR {(logoOn) ? <span href = "#">GUARD</span>: null} </a> </div> 
      <div class = "content"> 
      {(hideBtn)?   <a class = "toggle-button" onClick={() => {setToggle(!isToggleOn)}}>
          <span class ="bar"></span>
          <span class ="bar"></span>
          <span class ="bar"></span>
        </a>: null}
    
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