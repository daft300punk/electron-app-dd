import React from 'react';
import paper, { view } from 'paper';

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {size: []};
  }

  componentDidMount() {
    const canvas = document.getElementById('canvas');
    canvas.style.width = '100%';
    paper.setup(canvas);

    var myPath;
    var pathData = 'M98.36,214.208l2.186-1.093V210.2l-3.378,0.117l1.174,4.137L98.36,214.208z';
    var pathnew = new paper.Path(pathData);
    pathnew.strokeColor = '#ef3969';
    pathnew.scale(50);
    pathnew.strokeWidth = 3;


    view.onMouseDown = (event) => {
      myPath = new paper.Path();
      myPath.strokeColor = '#7ece1f';
      myPath.strokeWidth = 3;
    }

    view.onMouseDrag = (event) => {
      let arrayPoints = this.state.size;
      arrayPoints.push(event.point);
      this.setState({
        size: arrayPoints
      });
      myPath.add(event.point);
      console.log(myPath);
    }

  }

  render() {
    const style={
      background: '#062456'
    }
    return <canvas id="canvas" style={style} data-paper-resize />;
  }

}


export default Canvas;
