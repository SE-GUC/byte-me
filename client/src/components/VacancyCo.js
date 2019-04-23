import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import axios from 'axios'


 

class VacancyCo extends Component {

  
    

  render() {

    return (
        <tr>

          <td>

            {this.props.obj.dailyHours}

          </td>

          <td>

            {this.props.obj.description}

          </td>

          <td>

            {this.props.obj.duration}

          </td>

          <td>

            {this.props.obj.startDate}

          </td>

          <td>

            {this.props.obj.endDate}

          </td>

          <td>

            {this.props.obj.monthlyWage}

          </td>
          <td>

            {this.props.obj.requiredSkills}

          </td>
          <td>

            {this.props.obj.location}

          </td>

       
  
  
        </tr>


    );

  }

}

 

export default VacancyCo;

 