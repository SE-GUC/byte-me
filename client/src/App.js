import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomeEvent from "./components/HomeEventPartner";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React, { Component } from 'react';
//import Dropdown from 'react-drop-down';

import UpdatePartner from './components/UpdatePartner';
import GetPartners from './components/GetPartners';
import GetPartner from './components/GetPartner';
import DeletePartner from './components/DeletePartner';
import SearchFieldOfWork from './components/SearchFieldOfWork';
import CreatePartner from './components/CreatePartner';
import PartnerViewVacancies from './components/PartnerViewVacancies';
import SearchOrganizationName from './components/SearchOarganizationName';
import SignIn from './components/SignIn'
import SignUpHome from './components/SignUpHome';
import HomePartner from './components/HomePartner';
import './App.css';
import SearchEmail from './components/SearchEmail';

import WhichEntity from "./components/WhichEntity";
import WhichEntityevent from "./components/WhichEntityevent"
class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={"/"} className="navbar-brand">
              Lirten HUB
            </Link>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={"/partner"} className="nav-link">
                    Partner
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/member"} className="nav-link">
                    Member
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/vacancy"} className="nav-link">
                    Vacancy
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/event"} className="nav-link">
                    Event
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/coworking"} className="nav-link">
                    CoWorking
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <div>
            {/* Vacancy */}
            {/* <VacancyPost/> */}
            {/* <ViewVacancy/> */}
          </div>
          )} />
          <Route path="/Partner" render={props => (
            
            <React.Fragment>
              
            <DeletePartner  />
           
           

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
      
      <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={"/"} className="navbar-brand">
              Lirten HUB
            </Link>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
              
{/* <li className="nav-item">
 <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Sign up
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="/partner">partner</Dropdown.Item>
    <Dropdown.Item href="/member">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>; </li> */}
              <li className="nav-item">

<Link to={'/partner'} className="nav-link">Partner</Link>
</li>
<li className="nav-item">

<Link to={'/partnerProfile'} className="nav-link">Partner profile</Link>
</li>


              </ul>
            </div>
          </nav>
         
          <Switch>
           
            <Route path={"/partner"} component={SignUpHome} />
            <Route path={"/partnerProfile"} component={HomePartner} />
            <Route path={"/event"} component={WhichEntityevent} />
            <Route path={"/vacancy"} component={WhichEntity} />
          </Switch>
        </div>
    </Router>

    );
  }
}

export default App;
