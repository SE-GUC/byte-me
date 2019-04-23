import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Attendees extends Component {

  constructor(props) {
        super(props);
       
    }
    
  render() {
    return (
        <tr>
          
          <td>
            {this.props.obj.Attendees[0]}
          </td>
          <td>
            {this.props.obj.Attendees[1]}
          </td>
          <td>
            {this.props.obj.Attendees[2]}
          </td>
          <td>
            {this.props.obj.Attendees[3]}
          </td>
          <td>
            {this.props.obj.Attendees[4]}
          </td>
          <td>
            {this.props.obj.Attendees[5]}
          </td>
          
          {/* <td>
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td> */}
        </tr>
    );
  }
}

export default Attendees;