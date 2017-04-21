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
          <div className={styles.moduleImage}>
            <img src={require('./1.png')} />
          </div>
          <div className={styles.moduleTitle}>
            <Link to="/modules/lines">Lines</Link>
          </div>
        </Paper>
        <Paper zDepth={1} style={style} className={styles.paperItem}>
          <div className={styles.moduleImage}>
            <img src={require('./2.png')} />
          </div>
          <div className={styles.moduleTitle}>
            <Link to="/modules/curves">Curves</Link>
          </div>
        </Paper>
        <Paper zDepth={1} style={style} className={styles.paperItem}>
          <div className={styles.moduleImage}>
            <img src={require('./3.png')} />
          </div>
          <div className={styles.moduleTitle}>
            <Link to="/modules/muscle">Muscle</Link>
          </div>
        </Paper>
        <Paper zDepth={1} style={style} className={styles.paperItem}>
          <div className={styles.moduleImage}>
            <img src={require('./4.png')} />
          </div>
          <div className={styles.moduleTitle}>
            <Link to="/modules/proportions">Proportions</Link>
          </div>
        </Paper>
        <Paper zDepth={1} style={style} className={styles.paperItem}>
          <div className={styles.moduleImage}>
            <img src={require('./5.png')} />
          </div>
          <div className={styles.moduleTitle}>
            <Link to="/modules/right-brain">Right Brain</Link>
          </div>
        </Paper>
      </div>
    );
  }
}
