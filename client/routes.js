import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Posts, Projects, Body } from './components/index';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/posts" component={Posts} />
        <Route path="/projects" component={Projects} />
        <Route component={Body} />
      </Switch>
    );
  }
}

export default Routes;
