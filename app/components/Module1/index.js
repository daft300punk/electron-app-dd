import React, { Component } from 'react';
import styles from './index.css';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Link from 'react-router';
import { browserHistory } from 'react-router';
import paper, {view} from 'paper';

class Module1 extends Component {
  constructor(props) {
    super(props);
    this.onClickClose = props.onClickClose;
  }

  componentDidMount() {
    const canvas = document.getElementById('canvas');
    canvas.style.width = '100%';
    paper.setup(canvas);

    var path1 = new paper.Path('M98.36,214.208l2.186-1.093V210.2l-3.378,0.117l1.174,4.137L98.36,214.208z');
    path1.strokeColor = '#f5f5f5';
    path1.strokeWidth = 3;
    path1.scale(50);
    path1.visible = false;

    const length = path1.length;

    let pathSuperimposed = new paper.Path({
      strokeColor: 'red',
      strokeWidth: 4,
      opacity: .2,
    });
    pathSuperimposed.onFrame = function(event) {
      if(event.count < length / 2) {
        pathSuperimposed.add(path1.getPointAt(event.count * 2));
      }
    }
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