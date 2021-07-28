import React from 'react';
import { Route, Switch } from 'react-router';
import ProjectDetail from './pages/Components/ProjectDetail'
import Pages from './pages'
import { BrowserRouter as Router } from 'react-router-dom'
const ProjectRouter = () => {
  return (
      <Router>
        <Switch>
        <Route exact path="/" component={Pages} />
            <Route exact path="/project/:slug" component={ProjectDetail} />
        </Switch>
      </Router>
  );
};

export default ProjectRouter;
