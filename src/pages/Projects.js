import React, { useEffect, useState } from 'react';
import FadeIn from 'react-fade-in';
export default Projects;

function Projects() {
    const [hovering, setHover] = useState("none");
    const [showMore, setShowMore] = useState(false);
    const [describe, getdescription] = useState();
    const { x, y, handleMouseMove } = useMove();

    return (
        <div id="proj" class={showMore ? "projects-container show" : "projects-container hide"} onMouseMove={handleMouseMove}>
            <div class="grid-projects" id="g-proj" >
                <span class="left-grid">
                    <div class="GOL ShowProject" onMouseEnter={() => { setHover("GOL"); getdescription(decribeGOL); }} onMouseLeave={() => { setHover(false) }}>
                        <p>Game Of Life</p>
                        <div>
                            {(hovering == "GOL") ?
                                <span>
                                    <button class="button" onClick={() => { }}> Launch</button>
                                    <a href="https://github.com/ConnorGuard/Conways-Game-of-life" target="popup"> <GithubBlack /> </a>
                                    <Description describe={describe} hovering={hovering} />
                                </span>
                                : null}
                        </div>
                    </div>

                    <div class="AG ShowProject" onMouseEnter={() => { setHover("AG"); getdescription(decribePMAG); }} onMouseLeave={() => { setHover(false) }}>
                        <p>Pattern Matching <br></br>Arduino Game</p>
                        {(hovering == "AG") ? <span>
                            <a href="https://www.tinkercad.com/embed/8nOrSGffqya?editbtn=1" target="popup"><button class="button"> Launch</button></a>
                            <a href="https://github.com/ConnorGuard/PatternMatchGameArduino" target="popup"> <GithubBlack />  </a>
                            <Description describe={describe} hovering={hovering} />
                        </span>
                            : null}
                    </div>

                    <div Class={(showMore) ? "WP ShowProject" : "WP hideProject"} onMouseEnter={() => { setHover("WP"); getdescription(describeWebApp); }} onMouseLeave={() => { setHover(false); }}>
                        <p>Web Computing<br></br>Project</p>
                        {(hovering == "WP") ? <span>
                            <button class="button" onClick={() => { }}> Launch</button>
                            <a href="" target="popup"> <GithubBlack />  </a>
                            <Description describe={describe} hovering={hovering} />
                        </span>
                            : null}
                    </div>
                </span>

                <span class="center-grid">
                    <div class="pWeb ShowProject" onMouseEnter={() => { setHover("pWeb"); getdescription(decribePortfolio); }} onMouseLeave={() => { setHover(false) }}>
                        <p>Portfolio<br></br>website</p>
                        {(hovering == "pWeb") ? <span>
                            <button class="button"> Already here!</button>
                            <a href="https://github.com/ConnorGuard/Portfolio-Connor-Guard" target="popup"> <GithubBlack />  </a>
                            <Description describe={describe} hovering={hovering} />
                        </span>
                            : null}
                    </div>

                    <div Class={(showMore) ? "TP ShowProject" : "TP ShowProject"} onMouseEnter={() => { setHover("TP"); getdescription(decribePrototype); }} onMouseLeave={() => { setHover(false) }}>
                        <p>Travel Planner<br></br>design challenge</p>
                        {(hovering == "TP") ? <span>
                            <a href="https://connorguard259487.invisionapp.com/console/share/R92EN0X5MK/477579721" target="popup"><button class="button" > Launch</button></a>
                            <a href="https://github.com/ConnorGuard/Travel-Planner-Design" target="popup"> <GithubBlack />  </a>
                            <Description describe={describe} hovering={hovering} />
                        </span>
                            : null}
                    </div>

                    <div Class={(showMore) ? "ATP ShowProject" : "ATP hideProject"} onMouseEnter={() => { setHover('ATP'); getdescription(decribeATP); }} onMouseLeave={() => { setHover(false) }}>
                        <p>Asset Trading<br></br>Platform</p>
                        {(hovering == "ATP") ?
                            <span>
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
                        <p>Raspberry Pi<br></br>challenge</p>
                        {(hovering == "ideaPi") ?
                            <span>
                                <button class="button" onClick={() => { }}> Launch</button>
                                <a href="https://github.com/ConnorGuard/IdeaPi" target="popup"> <GithubBlack />  </a>
                                <Description describe={describe} hovering={hovering} />
                            </span>
                            : null}
                    </div>

                    <div Class={(showMore) ? "webS ShowProject" : "webS ShowProject"} onMouseEnter={() => { setHover("webS"); getdescription(describeWebApp); }} onMouseLeave={() => { setHover(false); }}>
                        <p>Shop From Home<br></br>web scraper</p>
                        {(hovering == "webS") ? <span>
                            <button class="button" onClick={() => { }}> Launch</button>
                            <a href="" target="popup"> <GithubBlack />  </a>
                            <Description describe={describe} hovering={hovering} />
                        </span>
                            : null}
                    </div>
                </span>
            </div>
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
        <p>
            The Game of Life,
            is a cellular automaton devised by John Horton Conway.
            Its evolution is determined by its initial state.
            The player creates an initial configuration and
            observes how it evolves.
            <br></br>
            <br></br>
            <p2> &nbsp;C#</p2>
        </p>
    )
}

const decribeATP = () => {
    return (
        <p>
            Coming soon!
            <p2><br></br><br></br>Java &nbsp; SQL</p2>
        </p>
    )
}

const decribePortfolio = () => {
    return (
        <p>
            A React web application used to display allof my
            hard work!&nbsp;A heavy focus on design, optimized
            to be&nbsp;user&nbsp;friendly.&nbsp;Take a look at my code on Github.
            <p2><br></br><br></br>React.JS &nbsp; HTML &nbsp; CSS &nbsp; Firebase</p2>
        </p>
    )
}

const describeWebApp = () => {
    return (
        <p>
            COMING SOON!
            <p2><br></br><br></br>React.JS &nbsp; HTML &nbsp; CSS &nbsp;  SQL</p2>
        </p>
    )
}

const decribePMAG = () => {
    return (
        <p>
            A pattern matching game made with an Arduino!
            This project developed my embedded systems and C programming skills.
            1) Launch the app 2) start simulation 3) press any button to play.
            <p2><br></br><br></br>C</p2>
        </p>
    )
}

const decribePrototype = () => {
    return (
        <p>
            Students need a simple way to track and manage time and money.
            I created an app that assists students with transport,
            time management and finance.
            <p2><br></br><br></br>Photoshop &nbsp; invisionapp </p2>
        </p>
    )
}

const decribeRaspberry = () => {
    return (
        <p>
            IdeaPi, is a mini project that I worked on to&nbsp;develop
            my knowledge into APIs.&nbsp;This application allows the 
            user to speak a&nbsp;new idea into a microphone, then receive
            the idea as text and audio in their Email.
            <p2><br></br><br></br>Python Google & SendGrid API</p2>
        </p>
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
