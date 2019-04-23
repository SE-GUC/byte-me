import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class DeletePartner extends Component {

   constructor(props) {
         super(props);
         this.delete = this.delete.bind(this);
    }
    componentDidMount() {
       
            
    }
    delete(){
      axios.delete('http://localhost:4000/api/partner/delete/5cbe74851607de05b4ae7c42')
      .then(console.log('Deleted'))
           .catch(err => console.log(err))
    }
  render() {
    return (
        <tr>
          
          
           <td>
            <button onClick={this.delete} className="btn btn-danger">Delete my profile</button>
          </td> 
        </tr>
    );
  }
}

export default DeletePartner;