// @flow
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Module from '../components/Module';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';

import PATH_DATA from './pathData';

const ModuleContainer = ({ onClickClose, moduleType }) => {
  console.log(PATH_DATA[moduleType]);
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