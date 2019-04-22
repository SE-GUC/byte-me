import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import axios from 'axios'


 

class TableRowVacancy extends Component {

    constructor(props) {

        super(props);

        this.delete = this.delete.bind(this);
        this.edit = this.edit.bind(this);
        this.apply = this.apply.bind(this);


    }
    delete() {

        axios.delete('http://localhost:4000/api/vacancy/delete/'+this.props.obj._id)

            .then(console.log('Deleted'))
            .then(window.parent.location = window.parent.location.href)

            .catch(err => console.log(err))

    }
    edit(){
        axios.put('http://localhost:4000/api/vacancy/update/'+this.props.obj_id, {

            dailyHours: this.state.dailyHours,
    
            description: this.state.description,
    
            duration: this.state.duration,
    
            startDate: this.state.startDate,

            endDate: this.state.endDate,
    
            monthyWage: this.state.monthyWage,
    
            requiredSkills: this.state.requiredSkills,

            location:this.state.location
    
        }, {
    
            headers: {
    
            'Content-Type': 'application/json'
    
            }
    
        })
    
        .then(res => {
    
            console.log(res.data)
    
        })
    
        .catch(error => {
    
            console.log(error)
    
        })
        
        
        
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

       
  
  
        </tr>


    );

  }

}

 

export default TableRowVacancy;

 