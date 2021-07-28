import React, { useState, useEffect } from 'react';
import { getProject } from './GetProjects';
import styled from 'styled-components'
import FadeIn from 'react-fade-in';

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

export default function  ProjectDetail ({ match }) {
    const [article, setArticle] = useState(undefined);

    useEffect(() => {
      getProject(match).then((res) => setArticle(res));
    }, [match]);

  return (
    <>
      {(article !== undefined) ? <ArticleBody article = {article}/> : null}
    </>
  );
};

const ArticleBody = ({ article }) => {
  const { title, slug, github, description, icon, launch, languages} = article.fields;
  return (
    <FadeIn>
        <h1>{title}</h1>
        <Intro > {description} </Intro>
    </FadeIn>
  );
};