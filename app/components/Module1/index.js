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

const SVG_ARRAY = [
  'M213.1,6.7c-32.4-14.4-73.7,0-88.1,30.6C110.6,4.9,67.5-9.5,36.9,6.7C2.8,22.9-13.4,62.4,13.5,110.9 C33.3,145.1,67.5,170.3,125,217c59.3-46.7,93.5-71.9,111.5-106.1C263.4,64.2,247.2,22.9,213.1,6.7z',
  'M66.44,73.5H272.65m-206.22,30H272.65m-206.22,30H272.65m-206.22,30H272.65m-206.22,30H272.65m-206.22,30H272.65m-206.22,30H272.65',
  'M213.1,6.7c-32.4-14.4-73.7,0-88.1,30.6C110.6,4.9,67.5-9.5,36.9,6.7C2.8,22.9-13.4,62.4,13.5,110.9 C33.3,145.1,67.5,170.3,125,217c59.3-46.7,93.5-71.9,111.5-106.1C263.4,64.2,247.2,22.9,213.1,6.7z'
];

class Module1 extends Component {
  constructor(props) {
    super(props);
    this.currentPath = 0;
    this.onClickClose = props.onClickClose;
    this.myDrawer = new Drawer();
    this.state = {
      open: false,
    }
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
    this.startDrawer(SVG_ARRAY[0]);
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
    if (SVG_ARRAY.length > this.currentPath) {
      this.myDrawer.clearEverything();
      this.startDrawer(SVG_ARRAY[this.currentPath]);
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
          iconElementRight={SVG_ARRAY.length > this.currentPath && <FlatButton label="Next" onClick={this.handleDialogOpen} />}
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

export default Module1;