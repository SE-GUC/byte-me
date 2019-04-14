import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class CreatePartner extends Component {
    constructor (props) {
        super(props)
        this.onpartners=this.onpartners.bind(this);
        this.onboardMembers=this.onboardMembers.bind(this);
        this.onorganizationName=this.onorganizationName.bind(this)
        this.onemail = this.onemail.bind(this);
        this.onpassword= this.onpassword.bind(this);
        this.ondescription = this.ondescription.bind(this);
        this.onfieldOfWork = this.onfieldOfWork.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            partners:'',
            boardMembers:'',
            organizationName:'',
            email:'',
            password: '',
            description: '',
            fieldOfWork:'' 
        }
    }
    onpartners(e) {
        this.setState({
          partners: e.target.value
        });
      }
    onboardMembers(e) {
        this.setState({
          boardMembers: e.target.value
        });
      }
    onorganizationName(e) {
        this.setState({
          organizationName: e.target.value
        })
      }
    onemail(e) {
        this.setState({
          email: e.target.value
        })
      }
    onpassword(e) {
        this.setState({
          password: e.target.value
        })
      }
    ondescription(e) {
        this.setState({
          description: e.target.value
        })
      }
      onfieldOfWork(e) {
        this.setState({
          fieldOfWork: e.target.value
        })
      }
    
      onSubmit(e) {
        e.preventDefault();
        axios.post('http://localhost:4000/api/partner/', {
            partners:this.state.partners,
            boardMembers: this.state.boardMembers,
            organizationName: this.state.organizationName,
            email:this.state.email,
            password: this.state.password,
            description: this.state.description,
            fieldOfWork:this.state.fieldOfWork
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
  clickMe()
{
    // alert('test')
}
    render() {
        return(
            <div style={{ marginTop: 10 }}>
            <h3>Create a Partner</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Partners: </label>
                    <input type="text" 
                      className="form-control" 
                      value={this.state.partners}
                      onChange={this.onpartners}
                      />
                </div>
                <div className="form-group">
                    <label>Board Members: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.boardMembers}
                      onChange={this.onboardMembers}
                      />
                </div>
                <div className="form-group">
                    <label>Organization Name: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.organizationName}
                      onChange={this.onorganizationName}
                      />
                </div>
                <div className="form-group">
                    <label>Email: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.email}
                      onChange={this.onemail}
                      />
                </div>
                <div className="form-group">
                    <label>Password: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.password}
                      onChange={this.onpassword}
                      />
                </div>
                <div className="form-group">
                    <label>Description: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.description}
                      onChange={this.ondescription}
                      />
                </div>
                <div className="form-group">
                    <label>Field of Work: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.fieldOfWork}
                      onChange={this.onfieldOfWork}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" value="Create" className="btn btn-primary" onClick ={this.clickMe.bind(this)} />
                </div>
            </form>
        </div>
        )
    }

}

ReactDOM.render(
    <CreatePartner subreddit='reactjs' />,
      document.getElementById('root')
  )

export default CreatePartner;