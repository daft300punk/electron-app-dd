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

const SVG_ARRAY = [
  'M213.1,6.7c-32.4-14.4-73.7,0-88.1,30.6C110.6,4.9,67.5-9.5,36.9,6.7C2.8,22.9-13.4,62.4,13.5,110.9 C33.3,145.1,67.5,170.3,125,217c59.3-46.7,93.5-71.9,111.5-106.1C263.4,64.2,247.2,22.9,213.1,6.7z',
  'M66.44,73.5H272.65m-206.22,30H272.65m-206.22,30H272.65m-206.22,30H272.65m-206.22,30H272.65m-206.22,30H272.65m-206.22,30H272.65',
  'M213.1,6.7c-32.4-14.4-73.7,0-88.1,30.6C110.6,4.9,67.5-9.5,36.9,6.7C2.8,22.9-13.4,62.4,13.5,110.9 C33.3,145.1,67.5,170.3,125,217c59.3-46.7,93.5-71.9,111.5-106.1C263.4,64.2,247.2,22.9,213.1,6.7z'
];

class Module1 extends Component {
  constructor(props) {
    super(props);
    this.onClickClose = props.onClickClose;
    this.state = {
      arrayOfSVGPaths: SVG_ARRAY,
      myDrawer: new Drawer(),
    };
  }

  componentDidMount(svgPathData) {
    this.startDrawer(this.state.arrayOfSVGPaths[0]);
  }

  startDrawer(svgPathData) {
    const compoundPathData = svgPathData;

    this.state.myDrawer.initializeCanvas();
    this.state.myDrawer.loadPaths(compoundPathData);
    this.state.myDrawer.startAnimation();
    this.state.myDrawer.listenForUserInput();
  }

  onClickNext() {
    this.currentPath++;
    if (this.state.arrayOfSVGPaths.length > this.currentPath) {
      this.state.myDrawer.clearEverything();
      this.startDrawer(this.state.arrayOfSVGPaths[this.currentPath]);
    }
    else {
      console.log('No more path in array');
    }
  }

  componentWillUnmount() {
    this.state.myDrawer.clearEverything();
  }

  render() {
    const style = {
      flexGrow: '1',
      background: 'rgba(0, 0, 0, .10)',
    }
    return (
      <div className={styles.wrap}>
        <AppBar
          title={'Lines and Curves'}
          iconElementLeft={
            <IconButton onClick={this.onClickClose}>
              <NavigationClose />
            </IconButton>
          }
          iconElementRight={<FlatButton label="Finish" onClick={() => this.onClickNext()} />}
        />
        <div className={styles.canvasWrap}>
            <canvas id='canvas' style={style} data-paper-resize />
        </div>
      </div>
    );
  }
}

export default Module1;