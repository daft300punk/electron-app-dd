import React, { Component } from 'react';
import styles from './index.css';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Link from 'react-router';
import { browserHistory } from 'react-router';
import paper, { view } from 'paper';

class Module1 extends Component {
  constructor(props) {
    super(props);
    this.onClickClose = props.onClickClose;
  }

  componentDidMount() {
    const canvas = document.getElementById('canvas');
    canvas.style.width = '100%';
    paper.setup(canvas);

    let path1 = new paper.CompoundPath('M66.44,73.5H272.65m-206.22,30H272.65m-206.22,30H272.65m-206.22,30H272.65m-206.22,30H272.65m-206.22,30H272.65m-206.22,30H272.65');
    path1.strokeColor = '#f5f5f5';
    path1.strokeWidth = 3;
    //path1.scale(50);
    path1.visible = false;

    let length = path1.length;
    console.log(path1.children);

    let currChildPathIndex;


    let pathSuperimposed = new paper.CompoundPath();
    pathSuperimposed.strokeColor = 'red';
    pathSuperimposed.strokeWidth = 4;

    if (path1.hasChildren()) {
      currChildPathIndex = 0;
      pathSuperimposed.addChild(new paper.Path());
      console.log(pathSuperimposed);
    }

    let circle = new paper.Path.Circle({
      radius: 6,
      fillColor: 'white',
      shadowColor: new paper.Color(0, 0, 0, .5),
      shadowBlur: 16,
      shadowOffset: new paper.Point(0, 3)
    })


    //TODO: Refactor this ugly piece of shit, probably move whole of componentDidMount.
    pathSuperimposed.onFrame = function (event) {
      if (event.count < length) {
        if (path1.children[currChildPathIndex]) {
          if (event.count % path1.children[currChildPathIndex].length > path1.children[currChildPathIndex].length - 2) {
            currChildPathIndex++;
            pathSuperimposed.addChild(new paper.Path());
            console.log(currChildPathIndex);
          } else {
            pathSuperimposed.children[currChildPathIndex].add(path1.children[currChildPathIndex].getPointAt(event.count % path1.children[currChildPathIndex].length));
            circle.position = path1.children[currChildPathIndex].getPointAt(event.count % path1.children[currChildPathIndex].length);
          }
        }

      }
      else {
        circle.visible = false;
      }
    }

    let userDrawnPath;

    view.onMouseDown = (e) => {
      userDrawnPath = new paper.Path({
        strokeColor: '#73ce1f',
        strokeWidth: 2,
        blendMode: 'multiply'
      });
      userDrawnPath.add(e.point);
    }

    view.onMouseDrag = (e) => {
      userDrawnPath.add(e.point);
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