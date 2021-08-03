import FadeIn from 'react-fade-in';
import ProfilePicture from '../images/connor.jpg';

export default  function AboutMe() {
  return (
    <div class="about-container">
      <div class="about-left">
        <div class="info-left">
          <img class="connorimg" src={ProfilePicture} ></img>
          <p href="#contact"></p>
          <a href="https://drive.google.com/file/d/1LZJ27QxnK6YilP6gt8VT02HrJ2bkhauh/view" target="_blank"><button class="button">My resume</button></a>
          <button class="button" onClick={() => { window.location.href = '#contact'; }}>Lets work</button>
        </div>
      </div>
      <div class="aboutme-container" id="aboutme-right">
        <div class="aboutme-content">
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
          <h3>Here are a few technologies I've been working with recently</h3>
          <ul class="skills-list">
            <li>JavaScript</li>
            <li>C#</li>
            <li>React</li>
            <li>Python</li>
            <li>Node.js</li>
            <li>Java</li>
            <li>C</li>
            <li>SQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
}