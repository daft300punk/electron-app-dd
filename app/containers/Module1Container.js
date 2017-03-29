// @flow
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Module1 from '../components/Module1';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';

const Module1Container = ({ onClickClose }) => {
  return (
    <MuiThemeProvider>
      <Module1 onClickClose={onClickClose} />
    </MuiThemeProvider>
  );
}

const mapStateToProps = () => ({
  onClickClose: () => hashHistory.push('/')
});

export default connect(
  mapStateToProps
)(Module1Container);