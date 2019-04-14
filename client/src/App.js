import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Partner from './components/partner';
import EventPost from'./components/EventPost';

import CreateMember from './components/CreateMember';
import UpdateMember from './components/UpdateMember';


import VacancyPut from'./components/VacancyPut';
import VacancyPost from './components/VacancyPost'
import CoProfile from './components/Coworking/CoProfile';
import axios from 'axios';
import ViewRecommendedJobs from './components/ViewRecommended';
import ViewRecommendations from './components/ViewRecommended';

class App extends Component {
  state={
    partners:[]
  }
  
  
  componentDidMount() {
  
    axios.get('http://localhost:3001/api/partner')
      .then(res => this.setState({ partners: res.data }))
  }
  getPartners = () => {
    this.setState({ partners: this.state.partners});
    console.log(this.state.partners)
    
  }
  render() {
    return (
      <div className="App">
      
      
      
      <React.Fragment>
        
        <Partner getPartners={this.getPartners} />
        
      </React.Fragment>
        <EventPost/>

        <CreateMember/>
        <UpdateMember/>

        <VacancyPost/>
        {/* <CoProfile/> */}
        <VacancyPut/>
        <ViewRecommendations />

      </div>
    );
  }
}

export default App;

