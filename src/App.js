import React, { Component } from 'react';
import Header from './components/Header';
import Filters from './components/Filters';
import Shot from './components/Shot';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Filters />
        <Shot />
      </div>
    );
  }
}

export default App;
