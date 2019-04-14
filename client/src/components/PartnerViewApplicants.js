import React, { Component } from 'react';
import axios from 'axios';
import Applicants from './Applicants'


class PartnerViewApplicants extends Component {
  constructor(){
  super();
  this.state={
    vacancy:[]
  }
}

    onSubmit = (e) => {
        e.preventDefault();
        this.getVacancy();
    }
    
    componentDidMount() {
    
    }
    getVacancy = () => {
      axios.get('http://localhost:4000/api/partner/viewApplicants/')
      .then(res => this.setState({ vacancy: res.data.data }))
      this.setState({ vacancy: this.state.vacancy});
      }
      tabRow(){
        return this.state.vacancy.map(function(object, i){
          return <Applicants obj={object} key={i} />;
        })
      }
      
  render() {
    
    return(
      <div>
    <form onSubmit={this.onSubmit}>
    <input
    type= 'submit'
    value= 'View applicants'
    className= 'btn'
    style={{flex:3}}
    />
      <h3 align="center">Applicants list</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
    <thead>
      <tr>
        
        <th>Applicants:</th>
        </tr>
    </thead>
    <tbody>
      {this.tabRow()}
    </tbody>
    </table>
    </form>
    </div>
    )
  }
}

export default PartnerViewApplicants