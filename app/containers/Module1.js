// @flow
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Module1 extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>Module1</div>
      </MuiThemeProvider>
    );
  }
}