import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
// import {createStackNavigator, createAppContainer} from 'react-navigation';

export default class showevents extends Component {

constructor(props) {
super(props);
this.state = {event: []};
}
componentDidMount(){
axios.get('http://localhost:4000/api/event/')
.then(event => {
this.setState({ event: event.data.data });
})

.catch(function (error) {
console.log(error);
})
// const eventsg = await axios.get('http://localhost:3000/api/event')
// return eventsg.data
}
tabRow(){
return this.state.event.map(function(object, i){
return <TableRow obj={object} key={i} />;
});
}


render() {
return (
<div>
   <h3 align="center">Event List</h3>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
             <th>Type</th>
             <th>Name</th>
             <th>Description</th>
             <th>Location</th>
             <th>Duration</th>
             <th>Date</th>
             <th colSpan="2">Action</th>
          </tr>
        </thead>
      <tbody>
           { this.tabRow() }
      </tbody>
      </table>
    </div>
);
}
}