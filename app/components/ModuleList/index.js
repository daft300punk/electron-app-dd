import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import styles from './index.css';
import { Link } from 'react-router';

export default class ModuleList extends Component {
  render() {
    const style = {
      height: '250px',
      width: '200px',
      textAlign: 'center',
      marginRight: '30px',
    }

    return (
      <div className={styles.paperWrap}>
        <Paper zDepth={1} style={style} className={styles.paperItem}>
          <div className={styles.moduleImage}></div>
          <div className={styles.moduleTitle}>
            <Link to="/modules/1">Lines and Curves</Link>
          </div>
        </Paper>
        <Paper zDepth={1} style={style} className={styles.paperItem}>
          <div className={styles.moduleImage}></div>
          <div className={styles.moduleTitle}>Module 1</div>
        </Paper>
        <Paper zDepth={1} style={style} className={styles.paperItem}>
          <div className={styles.moduleImage}></div>
          <div className={styles.moduleTitle}>Module 1</div>
        </Paper>
        <Paper zDepth={1} style={style} className={styles.paperItem}>
          <div className={styles.moduleImage}></div>
          <div className={styles.moduleTitle}>Module 1</div>
        </Paper>
      </div>
    );
  }
}
