import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Partners extends Component {

  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }

    // componentDidMount() {
    //     axios.delete('http://localhost:8000/api/partner/'+this.props.obj._id)
            
    // }
    delete(){
      axios.delete('http://localhost:4000/api/partner/'+this.props.obj._id)
      .then(console.log('Deleted'))
      .catch(err => console.log(err))
    }
    
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.organizationName}
          </td>
          <td>
            {this.props.obj.email}
          </td>
          <td>
            {this.props.obj.password}
          </td>
          <td>
            {this.props.obj.description}
          </td>
          <td>
            {this.props.obj.partners}
          </td>
          <td>
            {this.props.obj.boardMmebers}
          </td>
          <td>
            {this.props.obj.fieldOfWork}
          </td>
           {/* <td>
            <Link to={"/delete/"+this.props.obj._id} className="btn btn-primary">Delete</Link>
          </td>  */}
           {/* <td>
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td>  */}
        </tr>
    );
  }
}

export default Partners;