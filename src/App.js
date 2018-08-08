import React, { Component } from 'react';
import Shots from './components/Shots';
import Header from './components/Header'
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
        <Shots />
        <p style = {styles} >Written by {name}, {year}</p>
      </div>
    );
  }
}

export default App;
