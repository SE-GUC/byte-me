import React, { Component } from 'react';
import axios from 'axios';
import TableRowEvents from './TableRowEvents'


class PartnerViewEvents extends Component {
  constructor(){
  super();
  this.state={
    event:[]
  }
}

    onSubmit = (e) => {
        e.preventDefault();
        this.getEvent();
    }
    
    componentDidMount() {
    
    }
    getEvent = () => {
      axios.get('http://localhost:4000/api/partner/viewEvents/')
      .then(res => this.setState({ event: res.data.data }))
      this.setState({ event: this.state.vacancy});
      }
      tabRow(){
        return this.state.event.map(function(object, i){
          return <TableRowEvents obj={object} key={i} />;
        })
      }
      
  render() {
    
    return(
      <div>
    <form onSubmit={this.onSubmit}>
    <input
    type= 'submit'
    value= 'View my events'
    className= 'btn'
    style={{flex:3}}
    />
      <h3 align="center">Event list</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
    <thead>
      <tr>
        <th>Type:</th>
        <th>Event name:</th>
        <th>Event description:</th>
        <th>Event location:</th>
        <th>Event duration:</th>
        <th>Event date:</th>
        <th>Attendees:</th>
        <th>Organized by:</th>
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

export default PartnerViewEvents