import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import axios from 'axios'


 

class Vacancymember extends Component {

    constructor(props) {

        super(props);

        
        this.apply = this.apply.bind(this);


    }
    

        

    
    apply(){
      axios.put('http://localhost:4000/api/vacancy/apply/5ca0c819f792812168c302e0/'+this.props.obj._id)
      .then(console.log('Applied'))
      .then(window.parent.location = window.parent.location.href)

      .catch(err => console.log(err))
    }
    
    

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


         <td>
  
  <button onClick={this.apply}className="btn btn-danger">Apply</button >
  

  </td>

        </tr>


    );

  }

}

 

export default Vacancymember;

 