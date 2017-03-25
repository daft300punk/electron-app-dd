import React, { Component } from 'react';
import styles from './Home.css';
import Canvas from './Canvas';


export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <Canvas />
        </div>
      </div>
    );
  }
}
