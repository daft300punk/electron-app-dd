// @flow
import React, { Component } from 'react';
import Home from '../components/Home';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class HomePage extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Home />
      </MuiThemeProvider>
    );
  }
}
