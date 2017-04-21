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
import Dialog from 'material-ui/Dialog';
import StarRatingComponent from 'react-star-rating-component';

class Module extends Component {
  constructor(props) {
    super(props);
    this.currentPath = 0;
    this.onClickClose = props.onClickClose;
    this.myDrawer = new Drawer();
    this.PATH_DATA_ARRAY = props.pathData;
    this.state = {
      open: false,
    }
  }

  handleDialogOpen = () => {
    this.setState({
      open: true
    });
  };

  handleDialogClose = () => {
    this.setState({
      open: false
    });
  };

  componentDidMount(svgPathData) {
    this.startDrawer(this.PATH_DATA_ARRAY[0]);
  }

  startDrawer(svgPathData) {
    const compoundPathData = svgPathData;

    this.myDrawer.initializeCanvas();
    this.myDrawer.loadPaths(compoundPathData);
    this.myDrawer.startAnimation();
    this.myDrawer.listenForUserInput();
  }

  onClickNext = () => {
    this.setState({
      open: false
    });

    this.currentPath++;   
    if (this.PATH_DATA_ARRAY.length > this.currentPath) {
      this.myDrawer.clearEverything();
      this.startDrawer(this.PATH_DATA_ARRAY[this.currentPath]);
    }
    else {
      console.log('No more path in array');
    }
  }

  componentWillUnmount() {
    this.myDrawer.clearEverything();
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Next"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.onClickNext}
      />
    ];

    const styleDialog = {
      width: '600px'
    }

    const styleRating = {
      transform: 'scale(2)',
      padding: '12px'
    }

    const newSettings = {
      rating: 3,
      width: '64px',
      height: '64px',
      count: 5,
      backgroundColor: 'gray',
      
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
          iconElementRight={this.PATH_DATA_ARRAY.length > this.currentPath 
            && <FlatButton label="Next" onClick={this.handleDialogOpen} />
          }
        />
        <Dialog 
          title="You did average!"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleDialogClose}
          contentStyle={styleDialog}
        >
          <StarRatingComponent
            name="rate1"
            startCount={5}
            value={3}
            editing={false}
            renderStarIcon={(index, value) => {
              return <span style={styleRating} className={index <= value ? 'fa fa-star' : 'fa fa-star-o'} />;
            }}
          />
        </Dialog>
        <div className={styles.canvasWrap}>
          <canvas id='canvas' />
        </div>
      </div>
    );
  }
}

Module.propTypes = {
  onClickClose: React.PropTypes.func,
  pathData: React.PropTypes.array
}

export default Module;