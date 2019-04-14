import React, { Component } from "react";

<<<<<<< HEAD
import CreateMember from './components/CreateMember';
import UpdateMember from './components/UpdateMember';


import VacancyPut from'./components/VacancyPut';
import VacancyPost from './components/VacancyPost'
import CoProfile from './components/Coworking/CoProfile';
import CoEdit from './components/Coworking/CoEdit';
import axios from 'axios';
=======
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import HomeVacancy from './components/HomeVacancy';
import HomeEvent from './components/HomeEvent';
import MemberHome from "./components/MemberHome";
>>>>>>> bc2d42fc43592e221e90d3c2e9adb14bb43bba8b

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div className="App">
      
      
      
      <React.Fragment>
        
        <Partner getPartners={this.getPartners} />
        
      </React.Fragment>
        <EventPost/>

        <CreateMember/>
        <UpdateMember/>

        <VacancyPost/>
        <CoProfile/>
        <CoEdit/>
        <VacancyPut/>

      </div>
=======
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
>>>>>>> bc2d42fc43592e221e90d3c2e9adb14bb43bba8b
    );
  }
}

export default App;
