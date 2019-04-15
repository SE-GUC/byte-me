import React, { Component } from "react";
import CreateMember from './components/CreateMember';
import UpdateMember from './components/UpdateMember';
import VacancyPost from './components/VacancyPost'
import CoProfile from './components/Coworking/CoProfile';
import CoEdit from './components/Coworking/CoEdit';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import HomeVacancy from './components/HomeVacancy';
import HomeEvent from './components/HomeEvent';
import MemberHome from "./components/MemberHome";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Cocreate from './components/Coworking/Cocreate';
import Coupdate from './components/Coworking/Coupdate';
import CoHome from './components/Coworking/CoHome';
import searchbyname from './components/Coworking/searchbyname';
import Header from './components/layout/Header';
import UpdatePartner from './components/UpdatePartner';
import GetPartners from './components/GetPartners';
import GetPartner from './components/GetPartner';
import DeletePartner from './components/DeletePartner';
import SearchPartner from './components/SearchPartner';
import CreatePartner from './components/CreatePartner';
import EventPost from './components/EventPost';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <EventPost/>
        <CreateMember/>
        <UpdateMember/>
        <VacancyPost/>
        <CoProfile/>
        <CoEdit/>
      </div>,
      <Router>
      <div className="App">

        
        
        {/* <Cocreate/>
        <Coupdate/>
        <searchbyname/> */}
        <CoHome/>

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

<Link to={'/partner'} className="nav-link">Partner</Link>
</li>
<li className="nav-item">
<Link to={'/member'} className="nav-link">Member</Link>
</li>
<li className="nav-item">
<Link to={'/vacancy'} className="nav-link">Vacancy</Link>
</li>
<li className="nav-item">
<Link to={'/event'} className="nav-link">Event</Link>
</li>
<li className="nav-item">
<Link to={'/coworking'} className="nav-link">CoWorking</Link>
</li>
              </ul>
            </div>
          </nav>
          <div>
            {/* Vacancy */}
            {/* <VacancyPost/> */}
            {/* <ViewVacancy/> */}
          </div>
          <Switch>
            {/* <Route exact path='/create/:id' component={ EventPost } /> */}
            {/* <Route path='/update/:id' component={ Edit } /> */}
            <Route path={"/vacancy"} component={HomeVacancy} />
            <Route path={"/event"} component={HomeEvent} />
            <Route path={"/member"} component={MemberHome} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
