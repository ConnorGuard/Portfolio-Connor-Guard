import './css/App.css';
import React from 'react';
//Import Pages
import Contact from './pages/Contact'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Projects from './pages/Projects'
import Nav from './Components/Nav'


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
