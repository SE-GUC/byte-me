import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRowEvents extends Component {

  constructor(props) {
        super(props);
       // this.delete = this.delete.bind(this);
    }
   
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.type}
          </td>
          <td>
            {this.props.obj.eventName}
          </td>
          <td>
            {this.props.obj.eventDescription}
          </td>
          <td>
            {this.props.obj.eventLocation}
          </td>
          <td>
            {this.props.obj.eventDuration}
          </td>
          <td>
            {this.props.obj.eventDate}
          </td>
          <td>
            {this.props.obj.attendees}
          </td>
          <td>
            {this.props.obj.organizedBy}
          </td>
          
          <td>
            <Link to={"/PartnerViewAttendees/"+this.props.obj._id} className="btn btn-primary">View attendees</Link>
          </td>
          {/* <td>
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td> */}
        </tr>
    );
  }
}

export default TableRowEvents;