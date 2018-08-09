import React, { Component } from 'react';
import Header from './components/Header'
import Filters from './components/Filters';
import Shots from './components/Shots';

import {name, year} from './data/autor';
import './App.css';

class App extends Component {
  render() {
    const styles = {
      textAlign: 'center',
      margin: '35px 0',
      fontSIze: '13px',
      color: '#AAA'
    }
    return (
      <div>
        <Header />
        <Filters />
        <Shots />
        <p style = {styles} >Written by {name}, {year}</p>
      </div>
    );
  }
}

export default App;
