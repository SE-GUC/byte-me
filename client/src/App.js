import React, { Component } from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import EditVacancy from "./components/EditVacancy";
import VacancyPost from "./components/VacancyPost";
import ViewVacancy from "./components/ViewVacancy";
import SearchVacancy from "./components/SearchCity";

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
                  <Link to={"/"} className="nav-link">
                    Home
                  </Link>
                </li>
                
                <li className="nav-item">
                  <Link to={"/post"} className="nav-link">
                    Post new Vacancy
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/viewAvailableVacancies"} className="nav-link">
                    Vacancies
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/Search"} className="nav-link">
                    Search
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

          <Switch>
            {/* <Route exact path='/create/:id' component={ EventPost } /> */}

            {/* <Route path='/update/:id' component={ Edit } /> */}

            <Route exact path="/post" component={VacancyPost} />
            <Route path="/update/:id" component={EditVacancy} />
            <Route path={"/viewAvailableVacancies"} component={ViewVacancy} />
            <Route path={"/Search"} component={SearchVacancy} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
