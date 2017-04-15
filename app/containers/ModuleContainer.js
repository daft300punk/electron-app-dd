// @flow
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Module from '../components/Module';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';

const ModuleContainer = ({ onClickClose }) => {
  return (
    <MuiThemeProvider>
      <Module onClickClose={onClickClose} />
    </MuiThemeProvider>
  );
}

const mapStateToProps = () => ({
  onClickClose: () => hashHistory.push('/')
});

export default connect(
  mapStateToProps
)(ModuleContainer);