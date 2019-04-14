import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React, { Component } from 'react';
import Header from './components/layout/Header';
import UpdatePartner from './components/UpdatePartner';
import GetPartners from './components/GetPartners';
import GetPartner from './components/GetPartner';
import DeletePartner from './components/DeletePartner';
import SearchPartner from './components/SearchPartner';
import CreatePartner from './components/CreatePartner';
import './App.css';

class App extends Component {
 
  render() {
    
    return (
      <Router>
      <div className="App">
        <div className="container">
          
          <Header />
          
          <Route path="/SignUp" render={props => (
            <React.Fragment>
              
              <CreatePartner  />
              
             
              
            </React.Fragment>

            

          )} />
          <Route path="/Partner" render={props => (
            
            <React.Fragment>
              
            <DeletePartner  />
             {/* <PartnerViewVacancies />
             <PartnerViewApplicants /> */}

<UpdatePartner/>
              <br></br>
              <br></br>
              <br></br>
              
              <GetPartners/>
              <br></br>
              <br></br>
              <br></br>
              <GetPartner/>
             <SearchPartner />
             
             
            
          </React.Fragment>
            
            

          )} />
        </div>  
      </div>
    </Router>

     
    );
  }
}

export default App;
