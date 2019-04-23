import React, { Component } from 'react';
import axios from 'axios';



class GetPartners extends Component {
  constructor(){
  super();
  this.state={
    partners:[]
  }
}

    onSubmit = (e) => {
        e.preventDefault();
        this.getPartners();
    }
    
    componentDidMount() {
    
    }
    getPartners = () => {
      axios.get('http://localhost:4000/api/partner')
      .then(res => this.setState({ partners: res.data.data }))
      this.setState({ partners: this.state.partners});
      }
      
  render() {
    
    return(
    <form onSubmit={this.onSubmit}>
    <input
    type= 'submit'
    value= 'Show Partners'
    className= 'btn'
    style={{flex:3}}
    />
    <h1>{this.state.partners.map(result => <ul key={result._id}> 
    Partner Name:<br></br> 
    <table border="2"><tbody><tr><th>{result.partners[0]}</th>
    <th>{result.partners[1]}</th><th>{result.partners[2]}</th>
    <th>{result.partners[3]}</th><th>{result.partners[4]}</th>
    <th>{result.partners[5]}</th><th>{result.partners[6]}</th>
    <th>{result.partners[7]}</th><th>{result.partners[8]}</th>
    <th>{result.partners[9]}</th></tr> 
    </tbody></table>
    Board Members:<br></br>
    <table border="2"><tbody><tr><th>{result.boardMembers[0]}</th>
    <th>{result.boardMembers[1]}</th><th>{result.boardMembers[2]}</th>
    <th>{result.boardMembers[3]}</th><th>{result.boardMembers[4]}</th>
    <th>{result.boardMembers[5]}</th><th>{result.boardMembers[6]}</th>
    <th>{result.boardMembers[7]}</th><th>{result.boardMembers[8]}</th>
    <th>{result.boardMembers[9]}</th></tr> 
    </tbody></table>
    Status:<br></br>
    {result.status}<br></br>  
    Organization Name:<br></br>
    {result.organizationName}<br></br>
    Email:<br></br>
    {result.email}<br></br>
    Description:<br></br>
    {result.description}<br></br>
    Field of Work:<br></br>
    {result.fieldOfWork}<br></br><br></br><br></br><br></br>  
    </ul>)}
    </h1>
    </form>)
  }
}

export default GetPartners;
