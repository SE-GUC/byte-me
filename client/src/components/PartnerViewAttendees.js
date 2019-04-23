import React, { Component } from 'react';
import axios from 'axios';
import Attendees from './Attendees'


class PartnerViewAttendees extends Component {
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
      axios.get('http://localhost:4000/api/partner/viewAttendees/')
      .then(res => this.setState({ event: res.data.data }))
      this.setState({ event: this.state.vacancy});
      }
      tabRow(){
        return this.state.event.map(function(object, i){
          return <Attendees obj={object} key={i} />;
        })
      }
      
  render() {
    
    return(
      <div>
    <form onSubmit={this.onSubmit}>
    <input
    type= 'submit'
    value= 'View attendees'
    className= 'btn'
    style={{flex:3}}
    />
      <h3 align="center">Attendees list</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
    <thead>
      <tr>
        
        <th>Attendees:</th>
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

export default PartnerViewAttendees