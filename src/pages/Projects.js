import React, { useEffect, useState } from 'react';
import FadeIn from 'react-fade-in';
import { ProjectCard } from './Components/ProjectCard'
import GetProjects from './Components/GetProjects'
import styled from 'styled-components'

const Title = styled.h2`
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    color: rgb(93, 123, 151);
    position: relative;
    margin-bottom: -50px;
    top: -40px;
`
function Projects() {
    const { x, y, handleMouseMove } = useMove();
    const [projects, setProjects] = useState("loading");
    const [showMore, setShowMore] = useState(false);

    useEffect(() => {
        GetProjects().then(response => {
            const n = 3
            const columns = [[], [], []]
            const projectPerLine = Math.ceil(response.length / 3)

            for (let line = 0; line < n; line++) {
              for (let i = 0; i < projectPerLine; i++) {
                const project = response[i + line * projectPerLine]
                if (!project) continue //avoid adding "undefined" values
                columns[line].push(project)
              }
            }
            setProjects(columns);
        });

    }, []);

    return (
        <div id="proj" class={showMore ? "projects-container show" : "projects-container hide"} onMouseMove={handleMouseMove}>     
            <FadeIn transitionDuration={1000}>
                {(projects === "loading") ? null
                :<div class="grid-projects" id="g-proj" >

                    <span class="left-grid">
                        <Title>My recent projects</Title>
                        {projects[0].map(project => (
                            <ProjectCard key={project.sys.id} project={project} />
                        ))}
                    </span>

                    <span class="center-grid">
                        {projects[1].map(project => (
                            <ProjectCard key={project.sys.id} project={project} />
                        ))}
                        <button id="showMore" class="button" onClick={() => { setShowMore(!showMore); }}>{(showMore) ? "Show Less" : "Show More"}</button>  
                    </span>

                    <span class="right-grid">
                        {projects[2].map(project => (
                            <ProjectCard key={project.sys.id} project={project} />
                        ))}
                    </span>
                </div>}
            </FadeIn>
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

export default Projects;