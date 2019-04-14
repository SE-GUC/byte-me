import React, { Component } from 'react';
import UpdatePartner from './components/UpdatePartner';
import GetPartners from './components/GetPartners';
import GetPartner from './components/GetPartner';
import CreatePartner from './components/CreatePartner';
import './App.css';

class App extends Component {
 
  render() {
    
    return (
      <div >
              <React.Fragment>
              <UpdatePartner/>
              <br></br>
              <br></br>
              <br></br>
              <CreatePartner/>
              <br></br>
              <br></br>
              <br></br>
              <GetPartners/>
              <br></br>
              <br></br>
              <br></br>
              <GetPartner/>
              </React.Fragment>
      </div>
      
    );
  }
}

export default App;
