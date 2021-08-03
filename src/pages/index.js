import '../css/App.css';
import React from 'react';
//Import Pages
import Contact from './Contact'
import Home from './Home'
import AboutMe from './AboutMe'
import Projects from './Projects'
import Nav from '../Components/Nav'


function Pages() {
  return (
    <>
    <Nav />
    <div class="page">
      <div className="Front-page">
        <div id="home" class="home">
          <Home />
        </div>
        <Projects />
      </div>
      <div id="about" class="about">
        <AboutMe />
      </div>
      <div id="contact" class="contact">
        <Contact />
      </div>
    </div>
    </>
  )
}

export default Pages;
