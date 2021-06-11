import React, { useEffect, useState } from 'react';
import FadeIn from 'react-fade-in';
export default Projects;

function Projects() {
    const [hovering, setHover] = useState(false);
    const [showMore, setShowMore] = useState(false);
    const [describe, getdescription] = useState();
    const { x, y, handleMouseMove } = useMove();

    return (
        <div id="proj" class={showMore ? "projects-container show" : "projects-container hide"} onMouseMove={handleMouseMove}>
            <h1 className="title">My recent projects</h1>
            <FadeIn transitionDuration={1000}>
                <div class="grid-projects" id="g-proj" >
                    <span class="left-grid">
                        <div class="GOL ShowProject" onMouseEnter={() => { setHover("GOL"); getdescription(decribeGOL); }} onMouseLeave={() => { setHover(false) }}>

                            <div>
                                {(hovering == "GOL") ?
                                    <span>
                                               <h1>Game Of Life</h1>
                                        <button class="button" onClick={() => {}}> Launch</button>
                                        <a href="https://github.com/ConnorGuard/Conways-Game-of-life" target="popup"> <GithubBlack /> </a>
                                        <Description describe={describe} hovering={hovering} />
                                    </span>
                                    : null}
                            </div>
                        </div>

                        <div class="AG ShowProject" onMouseEnter={() => { setHover("AG"); getdescription(decribePMAG); }} onMouseLeave={() => { setHover(false) }}>           
                            {(hovering == "AG") ? <span>
                            <h1>Pattern Matching <br></br>Game</h1>
                                <a href="https://www.tinkercad.com/embed/8nOrSGffqya?editbtn=1" target="popup"><button class="button"> Launch</button></a>
                                <a href="https://github.com/ConnorGuard/PatternMatchGameArduino" target="popup"> <GithubBlack />  </a>
                                <Description describe={describe} hovering={hovering} />
                            </span>
                                : null}
                        </div>

                        <div Class={(showMore) ? "WP ShowProject" : "WP hideProject"} onMouseEnter={() => { setHover("WP"); getdescription(describeWebApp); }} onMouseLeave={() => { setHover(false); }}>
                           
                            {(hovering == "WP") ? <span>
                            <h1>International Happiness Report</h1>
                                <button class="button" onClick={() => { }}> Launch</button>
                                <a href="" target="popup"> <GithubBlack />  </a>
                                <Description describe={describe} hovering={hovering} />
                            </span>
                                : null}
                        </div>
                    </span>

                    <span class="center-grid">
                        <div class="pWeb ShowProject" onMouseEnter={() => { setHover("pWeb"); getdescription(decribePortfolio); }} onMouseLeave={() => { setHover(false) }}>
                            {(hovering == "pWeb") ? <span>
                            <h1>Portfolio website</h1>
                                <button class="button"> Already here!</button>
                                <a href="https://github.com/ConnorGuard/Portfolio-Connor-Guard" target="popup"> <GithubBlack />  </a>
                                <Description describe={describe} hovering={hovering} />
                            </span>
                                : null}
                        </div>

                        <div Class={(showMore) ? "TP ShowProject" : "TP ShowProject"} onMouseEnter={() => { setHover("TP"); getdescription(decribePrototype); }} onMouseLeave={() => { setHover(false) }}>
                            {(hovering == "TP") ? <span>
                            <h1>Uni Life<br></br>Planner</h1>
                                <a href="https://connorguard259487.invisionapp.com/console/share/R92EN0X5MK/477579721" target="popup"><button class="button" > Launch</button></a>
                                <a href="https://github.com/ConnorGuard/Travel-Planner-Design" target="popup"> <GithubBlack />  </a>
                                <Description describe={describe} hovering={hovering} />
                            </span>
                                : null}
                        </div>

                        <div Class={(showMore) ? "ATP ShowProject" : "ATP hideProject"} onMouseEnter={() => { setHover('ATP'); getdescription(decribeATP); }} onMouseLeave={() => { setHover(false) }}>
                            {(hovering == "ATP") ?
                                <span>
                                                         <h1>ORDINAL<br></br>Enterprise App</h1>
                                    <button class="button" onClick={() => { }}> Launch</button>
                                    <a href="" target="popup"> <GithubBlack />  </a>
                                    <Description describe={describe} hovering={hovering} />
                                </span>
                                : null}
                        </div>
                        <button id="showMore" class="button" onClick={() => { setShowMore(!showMore); }}>{(showMore) ? "Show Less" : "Show More"}</button>
                    </span>

                    <span class="right-grid">
                        <div class="ideaPi ShowProject" onMouseEnter={() => { setHover("ideaPi"); getdescription(decribeRaspberry); }} onMouseLeave={() => { setHover(false) }}>
                            {(hovering == "ideaPi") ?
                                <span>
                                       <h1>Raspberry Pi<br></br>challenge</h1>
                                    <button class="button" onClick={() => { }}> Launch</button>
                                    <a href="https://github.com/ConnorGuard/IdeaPi" target="popup"> <GithubBlack />  </a>
                                    <Description describe={describe} hovering={hovering} />
                                </span>
                                : null}
                        </div>

                        <div Class={(showMore) ? "webS ShowProject" : "webS ShowProject"} onMouseEnter={() => { setHover("webS"); getdescription(describeWebApp); }} onMouseLeave={() => { setHover(false); }}>
                            {(hovering == "webS") ? <span>
                            <h1>Web Scraper Challenge</h1>
                                <button class="button" onClick={() => { }}> Launch</button>
                                <a href="" target="popup"> <GithubBlack />  </a>
                                <Description describe={describe} hovering={hovering} />
                            </span>
                                : null}
                        </div>
                    </span>
                </div>
            </FadeIn>
        </div>

    )
}

function GithubBlack() {
    return (<img class="github-proj" src="./github-proj.png" height="30" widh="3 0" target="popup"></img>)
}

function Description(props) {
    return (
        <FadeIn delay={400}>
            <div id="des" style={{ left: props.x + 20, top: props.y + 20 }}>
                {props.describe}
            </div>
        </FadeIn>
    )
}

const decribeGOL = () => {
    return (
        <div className = "proj-des">
            <p class="programming-languages">Languages: C#</p>
            <p>
                The Game of Life,
                is a cellular automaton devised by John Horton Conway.
                Its evolution is determined by its initial state.
                The player creates an initial configuration and
                observes how it evolves.
            </p>
        </div>
    )
}

const decribePMAG = () => {
    return (
        <div className = "proj-des">
            <p class="programming-languages">Languages: C</p>
            <p>
                A pattern matching game made with an Arduino!
                This project developed my embedded systems and C programming skills.
                1) Launch the app 2) start simulation 3) press any button to play.
            </p>
        </div>
    )
}

const decribeATP = () => {
    return (
        <div className = "proj-des">
            <p class="programming-languages">Languages:&nbsp;Java,&nbsp;Postgresql</p>
            <p>
                COMING SOON!
            </p>
        </div>
    )
}

const decribePortfolio = () => {
    return (
        <div className = "proj-des">
            <p class="programming-languages">Technologies: React.JS, HTML, CSS, Firebase</p>
            <p>
                A React web application used to display all of my&nbsp;hard&nbsp;work!&nbsp;A heavy focus on design,
                optimized&nbsp;to be&nbsp;user&nbsp;friendly.&nbsp;Take a look
                 at my code on Github.
            </p>
        </div>
    )
}

const describeWebApp = () => {
    return (
        <div className = "proj-des">
            <p class="programming-languages" >Languages: React.JS,&nbsp;HTML,&nbsp;CSS,&nbsp;SQL</p>
            <p>
                COMING SOON!
            </p>
        </div>
    )
}

const decribePrototype = () => {
    return (
        <div className = "proj-des">
            <p class="programming-languages">Technologies: Photoshop,&nbsp;invisionapp </p>
            <p>
                Students need a simple way to track and manage time and money.
                I created an app that assists students with transport,
                time management and finance.
            </p>
        </div>
    )
}

const decribeRaspberry = () => {
    return (
        <div className = "proj-des">
            <p class="programming-languages">Languages: Python, Google and<br></br>SendGrid API</p>
            <p>
                IdeaPi, is a mini project that I worked
            <br></br>on.&nbsp;This application allows
            <br></br>a user to speak a&nbsp;new idea
            into a microphone, then receive the idea
            as text and audio in their Email.
            </p>
        </div>
    )
}

const useMove = () => {
    const [state, setState] = useState({ x: 0, y: 0 })

    const handleMouseMove = e => {
        e.persist()
        setState(state => ({ ...state, x: e.clientX, y: e.clientY }))
    }
    return {
        x: state.x,
        y: state.y,
        handleMouseMove,
    }
}
