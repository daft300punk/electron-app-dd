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
  'M66.44,73.5H272.65m-206.22,30H272.65m-206.22,30H272.65m-206.22,30H272.65m-206.22,30H272.65m-206.22,30H272.65m-206.22,30H272.65',
  'M66.44,73.5H272.65m-206.22,30H272.65m-206.22,30H272.65m-206.22,30H272.65m-206.22,30H272.65m-206.22,30H272.65m-206.22,30H272.65',
  'M66.44,73.5H272.65m-206.22,30H272.65m-206.22,30H272.65m-206.22,30H272.65m-206.22,30H272.65m-206.22,30H272.65m-206.22,30H272.65'
];

class Module1 extends Component {
  constructor(props) {
    super(props);
    this.onClickClose = props.onClickClose;
    this.state = {
      arrayOfSVGPaths: SVG_ARRAY,
      currentPath: 0,
      myDrawer: new Drawer()
    };
  }

  componentDidMount(svgPathData) {
    this.startDrawer(this.state.arrayOfSVGPaths[0]);
  }

  startDrawer(svgPathData) {
    console.log('svg path received', svgPathData);

    const compoundPathData = svgPathData;

    this.state.myDrawer.initializeCanvas();
    this.state.myDrawer.loadPaths(compoundPathData);
    this.state.myDrawer.startAnimation();
    this.state.myDrawer.listenForUserInput();
  }

  onClickNext() {
    const nextPath = this.state.currentPath + 1;
    if (this.state.arrayOfSVGPaths.length > nextPath) {
      this.state.myDrawer.clearEverything();
      this.setState({
        currentPath: nextPath,
        myDrawer: new Drawer(),
      });
      this.startDrawer(this.state.arrayOfSVGPaths[this.state.currentPath]);
    }
    else {
      console.log('No more path in array');
    }
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