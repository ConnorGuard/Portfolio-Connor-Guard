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
const Intro = styled.p`
    font-size: 0.9rem;
    text-align: left;
    padding-bottom: 10px;
`
const Languages = styled.p`
    font-size: 0.9rem;
    text-align: left;
    padding-bottom: 10px;
    font-weight: bold;
`

const ReadMore = styled.a`
    text-decoration: underline;
    text-align: left;
    font-size: 0.7rem;
    color: hotpink;
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
        <Languages >Technologies: {languages}</Languages>
        <Intro > {description} <ReadMore href={`${window.location.href}project/${slug}`} target="popup"> Read More </ReadMore> </Intro>
        <span>
            {(launch === 'none') ? null : <a href={launch} target="popup"><button class="button"> Launch</button></a>}
            {(github === 'none') ? null : <a href={github} target="popup"> <GithubBlack /> </a> }
        </span>
    </FadeIn>
    : null}
    </ProjectIcon>
  );
};


function GithubBlack() {
    return (<img class="github-proj" src="./github-proj.png" height="30" widh="3 0" target="popup" alt = "github"></img>)
}