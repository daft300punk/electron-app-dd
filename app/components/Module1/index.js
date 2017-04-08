import React, { Component } from 'react';
import styles from './index.css';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Link from 'react-router';
import { browserHistory } from 'react-router';
import paper, { view } from 'paper';
import Drawer from '../../utils/Drawer/Drawer';

class Module1 extends Component {
  constructor(props) {
    super(props);
    this.onClickClose = props.onClickClose;
  }

  componentDidMount() {
    let myDrawer = new Drawer();
    const compoundPathData =
      'M66.44,73.5H272.65m-206.22,30H272.65m-206.22,30H272.65m-206.22,30H272.65m-206.22,30H272.65m-206.22,30H272.65m-206.22,30H272.65'
    myDrawer.initializeCanvas();
    myDrawer.loadPaths(compoundPathData);
    myDrawer.startAnimation();
  }


  render() {
    const style = {
      flexGrow: '1',
      background: 'rgba(0, 0, 0, .05)',
      height: '100%',
      width: '100%',
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
        />
        <div>
          <canvas id='canvas' style={style} data-paper-resize />
        </div>
      </div>
    );
  }
}

export default Module1;