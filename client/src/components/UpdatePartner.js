import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class UpdatePartner extends Component {
    constructor (props) {
        super(props)
        this.onpartner=this.onpartner.bind(this);       
        this.onpartners=this.onpartners.bind(this);
        this.onboardMember=this.onboardMember.bind(this);
        this.onboardMembers=this.onboardMembers.bind(this);
        this.onorganizationName=this.onorganizationName.bind(this)
        this.onemail = this.onemail.bind(this);
        this.onpassword= this.onpassword.bind(this);
        this.ondescription = this.ondescription.bind(this);
        this.onfieldOfWork = this.onfieldOfWork.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onSubmit1 = this.onSubmit1.bind(this);
        this.onSubmit2 = this.onSubmit2.bind(this);
        this.state = {
            partner:'',
            partners:'',
            boardMembers:'',
            boardMember:'',
            organizationName:'',
            email:'',
            password: '',
            description: '',
            fieldOfWork:'' 
        }
    }
    onpartner(e) {
      this.setState({
        partner: e.target.value
      });
    }
    onpartners(e) {
        this.setState({
          partners: e.target.value
        });
      }
      onboardMember(e) {
        this.setState({
          boardMember: e.target.value
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
        axios.put('http://localhost:4000/api/partner/5ca1141b21356c2d388904e7/', {
            partner:this.state.partner,
            boardMember: this.state.boardMember,
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
  onSubmit1(e) {
    e.preventDefault();
        axios.put('http://localhost:4000/api/partner/addPartners/5ca1141b21356c2d388904e7/', {
            partners:this.state.partners
        }, {
            headers: {
            'Content-Type': 'application/json'
            }
        })
        .then(res => {
            console.log(res.data)
            this.setState({
              partners:'' 
          })
        })
        .catch(error => {
            console.log(error)
        }) 
  }
  onSubmit2(e) {
    e.preventDefault();
        axios.put('http://localhost:4000/api/partner/addBoardMembers/5ca1141b21356c2d388904e7/', {
            boardMembers:this.state.boardMembers
        }, {
            headers: {
            'Content-Type': 'application/json'
            }
        })
        .then(res => {
            console.log(res.data)
            this.setState({
              boardMembers:'' 
          })
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
            <h3>Update Partner</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Organization Name: </label><br />
                    <input type="text" 
                      className="form-control"
                      value={this.state.organizationName}
                      onChange={this.onorganizationName}
                      />
                </div>
                <div className="form-group">
                    <label>Email: </label><br />
                    <input type="text" 
                      className="form-control"
                      value={this.state.email}
                      onChange={this.onemail}
                      />
                </div>
                <div className="form-group">
                    <label>Password: </label><br />
                    <input type="text" 
                      className="form-control"
                      value={this.state.password}
                      onChange={this.onpassword}
                      />
                </div>
                <div className="form-group">
                    <label>Description: </label><br />
                    <input type="text" 
                      className="form-control"
                      value={this.state.description}
                      onChange={this.ondescription}
                      />
                </div>
                <div className="form-group">
                    <label>Field of Work: </label><br />
                    <input type="text" 
                      className="form-control"
                      value={this.state.fieldOfWork}
                      onChange={this.onfieldOfWork}
                      />
                </div>
                <div className="form-group">
                    <label>Partner: </label><br />
                    <input type="text" 
                      className="form-control" 
                      value={this.state.partner}
                      onChange={this.onpartner}
                      />
                </div>
                <div className="form-group">
                    <label>Board Member: </label><br />
                    <input type="text" 
                      className="form-control"
                      value={this.state.boardMember}
                      onChange={this.onboardMember}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" value="Update" className="btn btn-primary" onClick ={this.clickMe.bind(this)} />
                </div>
            </form>
            <form onSubmit={this.onSubmit1}>
              Partners: <br />
              <input type="text" id="partners" 
              value={this.state.partners}
              onChange={this.onpartners} />
              <input type="submit" value="Add Partner" className="btn btn-primary" onClick ={this.clickMe.bind(this)} />
              <br/>
          </form>
          <form onSubmit={this.onSubmit2}>
              Board Members: <br />
              <input type="text" id="boardMembers" 
              value={this.state.boardMembers}
              onChange={this.onboardMembers} />
              <input type="submit" value="Add Board Member" className="btn btn-primary" onClick ={this.clickMe.bind(this)} />
              <br/>
          </form>
        </div>
        )
    }

}

ReactDOM.render(
    <UpdatePartner subreddit='reactjs' />,
      document.getElementById('root')
  )

export default UpdatePartner;