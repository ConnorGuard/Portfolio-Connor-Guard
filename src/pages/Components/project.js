import React, { useState } from 'react';
import styled from 'styled-components'
import FadeIn from 'react-fade-in';

const ProjectIcon = styled.div`
background-size: auto;
background-position: 50%;
background-repeat: no-repeat;
&:hover {
    background-image: linear-gradient(120deg, #89f6fea6 0%, #66a6ff9f 100%);
}
`

const gradient = {
    backgroundImage: "linear-gradient(120deg, #89f6fea6 0%, #66a6ff9f 100%)"
};

export const ProjectCard = ({ project }) => {
    const [hovering, setHover] = useState(false);
    const { title, slug, github, description, icon, launch, languages} = project.fields;

    const iconImg = {
        backgroundImage : `url(${icon.fields.file.url})`
    };

  return (
    <ProjectIcon style={(hovering !== slug) ? iconImg : gradient} class="project" onMouseEnter={() => { setHover(slug); }} onMouseLeave={() => { setHover(false) }}>
    {(hovering === slug) ?
    <FadeIn delay = {100}>
        <h1>{title}</h1>
        <span>
            <a href={launch} target="popup"><button class="button"> Launch</button></a>
            <a href={github} target="popup"> <GithubBlack /> </a>
        </span>
        <p>{description}</p>
        <p class="programming-languages">Languages: {languages}</p>
    </FadeIn>
    : null}
    </ProjectIcon>
  );
};


function GithubBlack() {
    return (<img class="github-proj" src="./github-proj.png" height="30" widh="3 0" target="popup" alt = "github"></img>)
}