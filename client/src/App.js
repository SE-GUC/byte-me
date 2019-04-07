import React, { Component } from 'react';
import logo from './logo.svg';
import Partner from './components/partner';
import './App.css';
import EventPost from'./components/EventPost';
import VacancyPost from './components/VacancyPost'
import axios from 'axios';
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
        <EventPost/>
        <VacancyPost/>
        <Partner getPartners={this.getPartners} />
      </div>
    );
  }
}

export default App;