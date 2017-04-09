import paper, { view } from 'paper';

class Drawer {
  constructor() {
    this.canvas;
    this.parentPath;
    this.noOfPathInParent;
    this.currChildPos;
    this.circleTip;
  }

  initializeCanvas() {
    this.canvas = document.getElementById('canvas');
    this.canvas.style.width = '100%';
    this.canvas.style.height = '100%';
    paper.setup(this.canvas);
  }

  loadPaths(pathDataInSVG) {
    this.parentPath = new paper.CompoundPath(pathDataInSVG);
    this.noOfPathInParent = this.parentPath.children.length;
    this.parentPath.visible = true;
    this.parentPath.strokeColor = new paper.Color(0, 0, 0, 0.1);
    this.parentPath.position = new paper.Point(960 , 400);
    
    this.currChildPos = 0;

    this.animatedPath = new paper.CompoundPath();
    this.animatedPath.addChild(new paper.Path());
    
    this.circleTip = new paper.Path.Circle({
      radius: 6,
      fillColor: 'white',
      shadowColor: new paper.Color(0, 0, 0, .5),
      shadowBlur: 16,
      shadowOffset: new paper.Point(0, 3)
    });
  }

  startAnimation() {
    this.animatedPath.strokeColor = 'red';
    this.animatedPath.strokeWidth = 4;
    this.animatedPath.onFrame = (event) => {
      const addPath = this.shouldAddPath(this.currChildPos);
      if (event.count < this.parentPath.length) {
        if (addPath) {
          const lengthCurrPathParent = this.parentPath.children[this.currChildPos].length;
          const shouldAddEndPoint =
            (event.count % lengthCurrPathParent) > (lengthCurrPathParent - 1);

          if (shouldAddEndPoint) {
            //add end point, add a child, increase index 
            this.animatedPath.children[this.currChildPos]
              .add(this.parentPath.children[this.currChildPos]
                .getPointAt(lengthCurrPathParent));

            this.currChildPos++;
            this.animatedPath.addChild(new paper.Path());
          } else {
            //just add point
            this.animatedPath.children[this.currChildPos]
              .add(this.parentPath.children[this.currChildPos]
                .getPointAt(event.count % lengthCurrPathParent));

            this.circleTip.position =
              this.parentPath.children[this.currChildPos]
                .getPointAt(event.count % lengthCurrPathParent);
          }
        }
      } else {
        this.circleTip.visible = false;
        return;
      }
    }
  }

  shouldAddPath(index) {
    if (this.parentPath.children[index]) {
      return true;
    }
    return false;
  }
}

export default Drawer;