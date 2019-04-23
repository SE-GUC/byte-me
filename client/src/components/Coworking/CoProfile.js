import React, { Component } from 'react';
import axios from 'axios';

class CoProfile extends Component {
  constructor(){
    super();
    this.state= {
      coworking:[]
    }
  }

  componentDidMount() {
     axios.get('http://localhost:4000/api/coworking').then(coworking => this.setState({coworking:coworking.data.coworking}))
  }
  
  render() {
    return (
    <h1>{this.state.coworking.map(result=> <li key={result.id}>{result.name}</li>)}</h1>
    );
  }
}

export default CoProfile;