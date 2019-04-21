import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React, { Component } from 'react';
import Header from './components/layout/Header';
import UpdatePartner from './components/UpdatePartner';
import GetPartners from './components/GetPartners';
import GetPartner from './components/GetPartner';
import DeletePartner from './components/DeletePartner';
import SearchFieldOfWork from './components/SearchFieldOfWork';
import CreatePartner from './components/CreatePartner';
import PartnerViewVacancies from './components/PartnerViewVacancies';
import SearchOrganizationName from './components/SearchOarganizationName';
import SignIn from './components/SignIn'
import './App.css';
import SearchEmail from './components/SearchEmail';

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
              
             <SignIn />
              
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
              <PartnerViewVacancies />
              <h3 align="center">Search For partners:</h3>
              <SearchOrganizationName />
              <SearchEmail />
             <SearchFieldOfWork />
             
             
            
          </React.Fragment>
            
            

          )} />
        </div>  
      </div>
    </Router>

     
    );
  }
}

export default App;
