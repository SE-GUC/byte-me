import React, { Component } from 'react';
import './App.css';
import Cocreate from './components/Coworking/Cocreate';
import Coupdate from './components/Coworking/Coupdate';
import CoHome from './components/Coworking/CoHome';
import searchbyname from './components/Coworking/searchbyname';
class App extends Component {
  render() {
    return (
      <div className="App">
        
        
        {/* <Cocreate/>
        <Coupdate/>
        <searchbyname/> */}
        <CoHome/>
      </div>
    );
  }
}

export default App;
