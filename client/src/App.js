import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomeEvent from "./components/HomeEventPartner";


//import Dropdown from 'react-drop-down';
import CoHome from './components/Coworking/CoHome';
import HomeMember from './components/MemberHome';
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

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item"> <Link to={"/partner"} className="nav-link">Partner</Link></li>
                <li className="nav-item"><Link to={"/member"} className="nav-link">Member</Link></li>
                <li className="nav-item"><Link to={"/vacancy"} className="nav-link">Vacancy</Link></li>
                <li className="nav-item"><Link to={"/event"} className="nav-link">Event</Link></li>
                <li className="nav-item"><Link to={"/coworking"} className="nav-link">CoWorking</Link></li>
              </ul>
            </div>
          </nav>
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

          <Switch>
            <Route path={"/partner"} component={SignUpHome} />
            <Route path={"/partnerProfile"} component={HomePartner} />
            <Route path={"/event"} component={WhichEntityevent} />
            <Route path={"/vacancy"} component={WhichEntity} />
            {/* <Route exact path='/create/:id' component={ EventPost } /> */}
            {/* <Route path='/update/:id' component={ Edit } /> */}
            
            <Route path={"/event"} component={HomeEvent} />
            <Route path={"/member"} component={HomeMember} />
            
            <Route path={"/coworking"} component={CoHome} />
          </Switch>
        </div>
    </Router>

    );
  }
}

export default App;
