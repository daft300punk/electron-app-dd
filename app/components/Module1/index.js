import React, { Component } from 'react';
import styles from './index.css';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Link from 'react-router';
import { browserHistory } from 'react-router';

class Module1 extends Component {
  constructor(props) {
    super(props);
    this.onClickClose = props.onClickClose;
  }

  componentDidMount() {
    const canvas = document.getElementById('canvas');
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