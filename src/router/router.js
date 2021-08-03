import React from 'react';
import { Route, Switch } from 'react-router';
import ProjectDetail from '../pages/Components/ProjectDetail'
import Index from '../pages/index'
import { BrowserRouter  as Router } from 'react-router-dom'
const ProjectRouter = () => {
  return (
      <Router  >
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/Portfolio-Connor-Guard" component={Index} />
          <Route exact path="/home" component={Index} />
          <Route path="/project/:slug" component={ProjectDetail} />
          <Route path=":url/project/:slug" component={ProjectDetail} />
        </Switch>
      </Router  >
  );
};

export default ProjectRouter;
