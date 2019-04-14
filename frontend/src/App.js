import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/layout/Header';
import CreatePartner from './components/CreatePartner';
import DeletePartner from './components/DeletePartner';
//import AuthHelperMethods from './components/AuthHelperMethods';
//import WithAuth from './components/WithAuth';

//import GetPartnerProfile from './components/GetPartnerProfile';
//import SignUp from './components/pages/SignUp';
//import Lirten_Hub from './Lirten_Hub.svg'; 
//import axios from 'axios';

import './App.css';
import PartnerViewVacancies from './components/PartnerViewVacancies';
import PartnerViewApplicants from './components/PartnerViewApplicants';
import SearchPartner from './components/SearchPartner';


//import lirtenHubPage from './components/layout/lirtenHubPage';
//import LogIn from './components/LogIn';



class App extends Component {

 // Auth = new AuthHelperMethods();


// _handleLogout = () => {
// this.Auth.logout()
// this.props.history.replace('/login');
// }
render() {
    return (
      <Router>
      <div className="App">
        <div className="container">
          
          <Header />
          
          <Route path="/SignUp" render={props => (
            <React.Fragment>
              {/* <img src= {Lirten_Hub} alt="lirten hub"/> */}
              <CreatePartner  />
              
             
              
            </React.Fragment>

            

          )} />
          <Route path="/Partner" render={props => (
            
            <React.Fragment>
              
            <DeletePartner  />
             {/* <PartnerViewVacancies />
             <PartnerViewApplicants /> */}
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