// @flow
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Module from '../components/Module';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';

const ModuleContainer = ({ onClickClose, moduleType }) => {
  console.log(moduleType);
  return (
    <MuiThemeProvider>
      <Module onClickClose={onClickClose} />
    </MuiThemeProvider>
  );
}

const mapStateToProps = (state, ownProps) => ({
  onClickClose: () => hashHistory.push('/'),
  moduleType: ownProps.type
});

export default connect(
  mapStateToProps
)(ModuleContainer);