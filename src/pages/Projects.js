import React, { useEffect, useState } from 'react';

export default Projects;

function Projects() {
    const [TinkerOn, toggleTinker] = useState(false);
    const [pWebOn, togglepWeb] = useState(false);
    const [prototypeOn, togglePrototype] = useState(false);
    const [hovering, setHover] = useState(false);
    const [showMore, setShowMore] = useState(false);
    const [describe, getdescription] = useState();
    const { x, y, handleMouseMove } = useMove();

    return (
        <div id="proj" class={showMore ? "projects-container show" : "projects-container hide"} onMouseMove={handleMouseMove}>
            {(TinkerOn) ? <TinkerCad exit={TinkerOn} toggle={toggleTinker} /> : null}
            {(pWebOn) ? <Portfolio exit={pWebOn} toggle={togglepWeb} /> : null}
            {(prototypeOn) ? <AppPrototype exit={prototypeOn} toggle={togglePrototype} /> : null}

            <div class="grid-projects" id="g-proj" >

                {(hovering) ? <Description x={x} y={y} describe={describe} /> : null}

                <div class="GOL" onMouseEnter={() => { setHover(true); getdescription(decribeGOL); }} onMouseLeave={() => { setHover(false) }}>
                    <p>Game Of Life<br></br>&nbsp;</p>
                    <div>
                        <button class="button" onClick={() => { }}> Launch</button>
                        <a href="https://github.com/ConnorGuard/Conways-Game-of-life" target="popup"> <GithubBlack /> </a>
                    </div>
                    <div><p2>C#</p2></div>
                </div>

                <div class="AG" onMouseEnter={() => { setHover(true); getdescription(decribePMAG); }} onMouseLeave={() => { setHover(false) }}>
                    <p>Pattern Matching Arduino Game</p>
                    <button class="button" onClick={() => { toggleTinker(!TinkerOn) }}> Launch</button>
                    <a href="https://github.com/ConnorGuard/PatternMatchGameArduino" target="popup"> <GithubBlack />  </a>
                    <p2><br></br><br></br>C</p2>
                </div>

                <div class="pWeb" onMouseEnter={() => { setHover(true); getdescription(decribePortfolio); }} onMouseLeave={() => { setHover(false) }}>
                    <p>Portfolio<br></br>website</p>
                    <button class="button" onClick={() => { togglepWeb(!pWebOn) }}> Launch</button>
                    <a href="https://github.com/ConnorGuard/Portfolio-Connor-Guard" target="popup"> <GithubBlack />  </a>
                    <p2><br></br><br></br>React.JS &nbsp; HTML &nbsp; CSS</p2>
                </div>

                <div Class={(showMore) ? "TP ShowProject" : "TP ShowProject"} onMouseEnter={() => { setHover(true); getdescription(decribePrototype); }} onMouseLeave={() => { setHover(false) }}> <p>Travel Planner<br></br>design challenge</p>
                    <button class="button" onClick={() => { togglePrototype(!prototypeOn) }}> Launch</button>
                    <a href="https://github.com/ConnorGuard/Travel-Planner-Design" target="popup"> <GithubBlack />  </a>
                    <p2><br></br><br></br>Photoshop invisionapp </p2></div>

                <div class="ideaPi" onMouseEnter={() => { setHover(true); getdescription(decribeRaspberry); }} onMouseLeave={() => { setHover(false) }}>
                    <p>Raspberry Pi<br></br>challenge</p>
                    <button class="button" onClick={() => { }}> Launch</button>
                    <a href="https://github.com/ConnorGuard/IdeaPi" target="popup"> <GithubBlack />  </a>
                    <p2><br></br><br></br>Python Google & SendGrid API</p2>
                </div>

                <div Class={(showMore) ? "webS ShowProject" : "webS ShowProject"} onMouseEnter={() => { setHover(true); getdescription(describeWebApp); }} onMouseLeave={() => { setHover(false) }}>
                    <p>Shop From Home<br></br>web scraper</p>
                    <button class="button" onClick={() => { }}> Launch</button>
                    <a href="" target="popup"> <GithubBlack />  </a>
                    <p2><br></br><br></br>Python &nbsp; HTML &nbsp; CSS &nbsp;  SQL</p2>
                </div>

                <div Class={(showMore) ? "WP ShowProject" : "WP hideProject"} onMouseEnter={() => { setHover(true); getdescription(describeWebApp); }} onMouseLeave={() => { setHover(false) }}>
                    <p>Web Computing<br></br>Project</p>
                    <button class="button" onClick={() => { }}> Launch</button>
                    <a href="" target="popup"> <GithubBlack />  </a>
                    <p2><br></br><br></br>React.JS &nbsp; HTML &nbsp; CSS &nbsp;  SQL</p2>
                </div>

                <div Class={(showMore) ? "ATP ShowProject" : "ATP hideProject"} onMouseEnter={() => { setHover(true); getdescription(decribeATP); }} onMouseLeave={() => { setHover(false) }}>
                    <p>Asset Trading<br></br>Platform</p>
                    <button class="button" onClick={() => { }}> Launch</button>
                    <a href="" target="popup"> <GithubBlack />  </a>
                    <p2><br></br><br></br>Java &nbsp; SQL</p2>
                </div>

                <div Class={(showMore) ? "p9 hideProject" : "hideProject"}></div>
            </div>
            <button id="showMore" class="button" onClick={() => { setShowMore(!showMore); }}>{(showMore) ? "Show Less" : "Show More"}</button>
        </div>

    )
}

function GithubBlack() {
    return (<img class="github-proj" src="./github-proj.png" height="40" widh="40" target="popup"></img>)
}

function Description(props) {
    return (
        <div class="describe" id="des" style={{ left: props.x + 20, top: props.y + 20 }}>
            {props.describe}
        </div>
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
        </p>
    )
}

const decribeATP = () => {
    return (
        <p>
            Coming soon!
        </p>
    )
}

const decribePortfolio = () => {
    return (
        <p>
            A React web application used to display all
            <br></br>of my hard work!&nbsp;A heavy focus on design,
            <br></br>optimized to be&nbsp;user&nbsp;friendly.&nbsp;Take a look at
            <br></br> my Github repo for this project.
        </p>
    )
}

const describeWebApp = () => {
    return (
        <p>
            COMING SOON!
        </p>
    )
}

const decribePMAG = () => {
    return (
        <p>
            A pattern matching game made with an Arduino!
            This project developed my embedded systems and C programming skills.
            1) Launch the app 2) start simulation 3) press any button to play.
        </p>
    )
}

const decribePrototype = () => {
    return (
        <p>
            Students need a simple way to track and manage time and money.
            I created an app that assists students with transport,
            time management and finance.
        </p>
    )
}

const decribeRaspberry = () => {
    return (
        <p>
            IdeaPi, is a mini project that I worked on to
            <br></br>develop my knowledge into APIs.
        This application allows the user to speak a
            <br></br>new idea into a microphone, then&nbsp;receive
            <br></br>the idea as text and audio in their Email.
        </p>
    )
}

function Portfolio(props) {
    return (
        <div class="display-proj portfolio">
            <button class="button" onClick={() => { props.toggle(!props.exit) }}> Exit</button>
            <iframe class="webSite" width="725" height="453"
                src="http://localhost:3000"
                frameborder="0" marginwidth="0" marginheight="0" scrolling="no">
            </iframe>
        </div>
    )
}
function TinkerCad(props) {
    return (
        <div class="display-proj tinkerCad">
            <button class="button" onClick={() => { props.toggle(!props.exit) }}> Exit</button>
            <iframe class="game" width="725" height="453"
                src="https://www.tinkercad.com/embed/8nOrSGffqya?editbtn=1"
                frameborder="0" marginwidth="0" marginheight="0" scrolling="no">
            </iframe>
        </div>);
}

function AppPrototype(props) {
    return (
        <div class="display-proj AppPrototype">
            <button class="button" onClick={() => { props.toggle(!props.exit) }}> Exit</button>
            <iframe class="prototype" width="925" height="653"
                src="https://connorguard259487.invisionapp.com/console/share/R92EN0X5MK/477579721"
                frameborder="0" marginwidth="0" marginheight="0" scrolling="no">
            </iframe>
        </div>);
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
