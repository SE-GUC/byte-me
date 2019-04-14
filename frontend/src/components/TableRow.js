import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {

  constructor(props) {
        super(props);
       // this.delete = this.delete.bind(this);
    }
   
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.ownedBy}
          </td>
          <td>
            {this.props.obj.description}
          </td>
          <td>
            {this.props.obj.duration}
          </td>
          <td>
            {this.props.obj.location}
          </td>
          <td>
            {this.props.obj.monthlyWage}
          </td>
          <td>
            {this.props.obj.startDate}
          </td>
          <td>
            {this.props.obj.dailyHours}
          </td>
          <td>
            {this.props.obj.endDate}
          </td>
          
          {/* <td>
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td> */}
        </tr>
    );
  }
}

export default TableRow;