import React, { Component } from 'react';
import styles from './index.css';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Link from 'react-router';
import { browserHistory } from 'react-router';
import paper, { view } from 'paper';
import Drawer from '../../utils/Drawer/Drawer';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

class Module extends Component {
  constructor(props) {
    super(props);
    this.currentPath = 0;
    this.onClickClose = props.onClickClose;
    this.myDrawer = new Drawer();
    this.state = {
      open: false,
    }
    this.PATH_DATA_ARRAY = props.pathData;
  }

  handleDialogOpen = () => {
    this.setState({
      open: true
    });
  };

  handleDialogClose = () => {
    this.setState({
      open: false
    });
  };

  componentDidMount(svgPathData) {
    this.startDrawer(this.PATH_DATA_ARRAY[0]);
  }

  startDrawer(svgPathData) {
    const compoundPathData = svgPathData;

    this.myDrawer.initializeCanvas();
    this.myDrawer.loadPaths(compoundPathData);
    this.myDrawer.startAnimation();
    this.myDrawer.listenForUserInput();
  }

  onClickNext = () => {
    this.setState({
      open: false
    });

    this.currentPath++;   
    if (this.PATH_DATA_ARRAY.length > this.currentPath) {
      this.myDrawer.clearEverything();
      this.startDrawer(this.PATH_DATA_ARRAY[this.currentPath]);
    }
    else {
      console.log('No more path in array');
    }
  }

  componentWillUnmount() {
    this.myDrawer.clearEverything();
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Next"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.onClickNext}
      />
    ]

    return (
      <div className={styles.wrap}>
        <AppBar
          title={'Lines and Curves'}
          iconElementLeft={
            <IconButton onClick={this.onClickClose}>
              <NavigationClose />
            </IconButton>
          }
          iconElementRight={this.PATH_DATA_ARRAY.length > this.currentPath && <FlatButton label="Next" onClick={this.handleDialogOpen} />}
        />
        <Dialog 
          title="See how you did"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleDialogClose}
        />
        <div className={styles.canvasWrap}>
          <canvas id='canvas' />
        </div>
      </div>
    );
  }
}

Module.propTypes = {
  onClickClose: React.PropTypes.func,
  pathData: React.PropTypes.array
}

export default Module;