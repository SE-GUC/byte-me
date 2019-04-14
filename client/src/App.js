



import React, { Component } from 'react';

import './App.css';
require('dotenv').config();

import Viewmembers from './components/viewmembers/viewmembers'
import Deleteprofile from './components/deleteprofile/deleteprofile';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Viewmembers/>
        <Deleteprofile/>
        
      </div>
    );
  }
}

export default App;