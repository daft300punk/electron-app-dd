import paper, { view, project } from 'paper';

class Drawer {
  constructor() {
    this.canvas;
    this.parentPath;
    this.noOfPathInParent;
    this.currChildPos;
    this.circleTip;
    this.userDrawnPath;
  }

  initializeCanvas() {
    this.canvas = document.getElementById('canvas');
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight - 64;
    this.canvas.style.height = window.innerHeight + 'px';
    this.canvas.style.width = window.innerWidth + 'px';

    paper.setup(this.canvas);
  }

  loadPaths(pathDataInSVG) {
    this.parentPath = new paper.CompoundPath(pathDataInSVG);
    this.noOfPathInParent = this.parentPath.children.length;
    this.parentPath.visible = true;
    this.parentPath.strokeColor = new paper.Color(0, 0, 0, 0.1);
    this.parentPath.scale(2);
    this.parentPath.position = new paper.Point(window.innerWidth / 2 , (window.innerHeight - 64) / 2);
    
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
    this.animatedPath.opacity = '.5';
    this.animatedPath.strokeWidth = 4;
    this.animatedPath.onFrame = (event) => {
      const addPath = this.shouldAddPath(this.currChildPos);
      if (event.count < this.parentPath.length) {
        //console.log(this.currChildPos);
        if (addPath) {
          const lengthCurrPathParent = this.parentPath.children[this.currChildPos].length;
          let shouldAddEndPoint =
            (event.count % lengthCurrPathParent) >= (lengthCurrPathParent - 1);

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

  listenForUserInput() {
    //initialize userDrawnPath
    this.userDrawnPath = new paper.CompoundPath();

    //set display properties for compound path
    this.userDrawnPath.strokeColor = '#73ce1f';
    this.userDrawnPath.strokeWidth = 4;
    this.userDrawnPath.blendMode = 'multiply';

    //set mouse input handlers
    view.onMouseDown = (e) => {
      this.userDrawnPath.addChild(new paper.Path());
      this.userDrawnPath.lastChild.add(e.point);
    };
    view.onMouseDrag = (e) => {
      this.userDrawnPath.lastChild.add(e.point);
    }
  }

  //utility function to check if a children exists
  shouldAddPath(index) {
    if (this.parentPath.children[index]) {
      return true;
    }
    return false;
  }

  clearEverything() {
    project.activeLayer.removeChildren();
  }
}

export default Drawer;