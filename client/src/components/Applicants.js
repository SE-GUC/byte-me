import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Applicants extends Component {

  constructor(props) {
        super(props);
       
    }
    
  render() {
    return (
        <tr>
          
          <td>
            {this.props.obj.Applicants[0]}
          </td>
          <td>
            {this.props.obj.Applicants[1]}
          </td>
          <td>
            {this.props.obj.Applicants[2]}
          </td>
          <td>
            {this.props.obj.Applicants[3]}
          </td>
          
          {/* <td>
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td> */}
        </tr>
    );
  }
}

export default Applicants;