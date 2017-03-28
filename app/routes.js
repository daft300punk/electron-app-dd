// @flow
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import Module1 from './containers/Module1'


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/modules/1" component={Module1} />
  </Route>
);
