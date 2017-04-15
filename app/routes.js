// @flow
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import ModuleContainer from './containers/ModuleContainer'


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/modules/lines" component={() => (<ModuleContainer type="lines" />)} />
  </Route>
);
