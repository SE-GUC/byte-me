import React, { Component } from 'react';
import axios from 'axios';
import TableRowCo from './TableRowCo';

// import {createStackNavigator, createAppContainer} from 'react-navigation';

export default class IndexCo extends Component {

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

}
tabRow(){
return this.state.event.map(function(object, i){
return <TableRowCo obj={object} key={i} />;
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