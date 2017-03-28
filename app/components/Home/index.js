import React, { Component } from 'react';
import style from './Home.css';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import ModuleList from '../ModuleList';


export default class Home extends Component {
  render() {
    return (
      <div>
        <AppBar
          title="DigiDraw"
        />
        <div className={style.homeBody}>
          <div className={style.mainTitle}>
            <h2>Available Modules</h2>
            <h4>Select one to start with</h4>
          </div>
          <ModuleList className={style.moduleList}/>
        </div>
      </div>
    );
  }
}
