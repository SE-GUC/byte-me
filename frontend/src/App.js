import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import CreateProfile from './components/CreateProfile';

//import SignUp from './components/pages/SignUp';

//import axios from 'axios';

import './App.css';
//import LogIn from './components/LogIn';

class App extends Component {
render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/"   /> 
            <Route path="/SignUp" render={props => (
              <React.Fragment>
                
                <CreateProfile  />
              </React.Fragment>
              

            )} />
          </div>  
        </div>
      </Router>
    );
  }
}

export default App;