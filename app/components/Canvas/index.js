import React from 'react';
import paper from 'paper';

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const canvas = document.getElementById('canvas');
    paper.setup(canvas);
    const path = new paper.Path();
    path.strokeColor = 'black';
    const start = new paper.Point(100, 100);
    path.moveTo(start);
    path.lineTo(start.add([200, -50]));
    paper.view.draw();
  }

  render() {
    return <canvas id="canvas" />;
  }

}


export default Canvas;
