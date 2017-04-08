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
    paper.setup(this.canvas);
  }

  loadPaths(pathDataInSVG) {
    this.parentPath = new paper.CompoundPath(pathDataInSVG);
    this.noOfPathInParent = this.parentPath;
    this.currChildPos = 0;
    this.parentPath.visible = true;
    this.parentPath.strokeColor = 'black';
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
    console.log(this.animatedPath);
    this.animatedPath.onFrame = (event) => {
      console.log('inside onframe');
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
            console.log('path added');
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
    console.log('youthob', this.parentPath.children[index]);
    if (this.parentPath.children[index]) {
      console.log(true);
      return true;
    }
    return false;
  }
}

export default Drawer;