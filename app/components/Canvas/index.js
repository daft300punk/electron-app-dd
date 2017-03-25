import React from 'react';
import paper, { view } from 'paper';

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const canvas = document.getElementById('canvas');
    canvas.style.width = '100%';
    paper.setup(canvas);

    let myPath;

    view.onMouseDown = (event) => {
      myPath = new paper.Path();
      myPath.strokeColor = 'black';
      myPath.strokeWidth = 3;
    }

    view.onMouseDrag = (event) => {
      myPath.add(event.point);
    }

    view.onMouseUp = (event) => {
    }
  }

  render() {
    const style={
      background: 'rgba(0, 0, 0, .1)'
    }
    return <canvas id="canvas" style={style} data-paper-resize />;
  }

}


export default Canvas;
