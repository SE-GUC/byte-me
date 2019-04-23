import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow'


class PartnerViewVacancies extends Component {
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
      axios.get('http://localhost:4000/api/partner/view/')
      .then(res => this.setState({ vacancy: res.data.data }))
      this.setState({ vacancy: this.state.vacancy});
      }
      tabRow(){
        return this.state.vacancy.map(function(object, i){
          return <TableRow obj={object} key={i} />;
        })
      }
      
  render() {
    
    return(
      <div>
    <form onSubmit={this.onSubmit}>
    <input
    type= 'submit'
    value= 'View my vacancies'
    className= 'btn'
    style={{flex:3}}
    />
      <h3 align="center">Vacancy list</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
    <thead>
      <tr>
        <th>Owned by:</th>
        <th>Description:</th>
        <th>Duration:</th>
        <th>Location:</th>
        <th>Monthly wage:</th>
        <th>Start date:</th>
        <th>Daily hours:</th>
        <th>End date:</th>
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

export default PartnerViewVacancies