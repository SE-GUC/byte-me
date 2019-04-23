import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeVacancy from '../components/HomeVacancy';
import HomeEvent from '../components/HomeEvent';
import MemberHome from "../components/MemberHome";
import Login from "../pages/Login";
import About from "./About";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CoHome from '../components/Coworking/CoHome';
import { connect } from 'react-redux';
import { login, logout, type } from '../globalState/actions/authActions';
import PropTypes from 'prop-types';

class Main extends Component {
    constructor(props) {
		super(props);
    }

	logout = () => {
		this.props.logout();
	};

    render() {
        return (
        <Router>
            <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to={"/"} className="navbar-brand">Lirten HUB</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item"><Link to={'/about'} className="nav-link">About</Link></li>
                {this.props.checkType==="Admin" ? <li className="nav-item"><Link to={'/members'} className="nav-link">Members</Link></li> : null}
                {this.props.checkType==="Admin" ? <li className="nav-item"><Link to={'/partners'} className="nav-link">Partners</Link></li> : null}
                <li className="nav-item"><Link to={'/coworkings'} className="nav-link">Coworkings</Link></li>
                <li className="nav-item"><Link to={'/vacancy'} className="nav-link">Vacancy</Link></li>
                <li className="nav-item"><Link to={'/event'} className="nav-link">Event</Link></li>
                {this.props.isLoggedIn?<li className="nav-item"><Link to={'/profile'} className="nav-link">ViewProfile</Link></li>:null}
                {this.props.isLoggedIn?<li className="nav-item"><Link to={'/#'} className="nav-link" onClick={this.logout}>Logout</Link></li>: null}
                {this.props.isLoggedIn?null:<li className="nav-item"><Link to={'/register'} className="nav-link">Register</Link></li>}
                {this.props.isLoggedIn?null:<li className="nav-item"><Link to={'/login'} className="nav-link">Login</Link></li>}
                </ul>
                </div>
            </nav>
            <Switch>
                <Route path={"/about"} component={About} />
                <Route path={"/vacancy"} component={HomeVacancy} />
                <Route path={"/event"} component={HomeEvent} />
                <Route path={"/member"} component={MemberHome} />
                <Route path={"/coworking"} component={CoHome} />
                <Route path={"/login"} component={Login}/>
            </Switch>
            </div>
        </Router>
        );
    }
}

Main.propTypes = {
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn,
    checkType: state.auth.checkType
});

export default connect(mapStateToProps,{login, logout, type })(Main);
