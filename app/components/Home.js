import React, { Component } from 'react';
import styles from './Home.css';
import Canvas from './Canvas';
import { Link } from 'react-router';


export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.container} >
          <Canvas />
        </div>
      </div>
    );
  }
}
