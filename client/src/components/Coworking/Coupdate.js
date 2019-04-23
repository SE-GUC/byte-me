import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class coworkingUpdate extends Component {
    constructor (props) {
        super(props)
        this.onname=this.onname.bind(this)
        this.onlocation = this.onlocation.bind(this);
        this.onemail= this.onemail.bind(this);
        this.onpassword = this.onpassword.bind(this);
        this.onrooms = this.onrooms.bind(this);
        this.onstatus=this.onstatus.bind(this);
        this.onbusinessPlan = this.onbusinessPlan.bind(this);
        this.onexpiryDate = this.onexpiryDate.bind(this);
        this.oncontractTime = this.oncontractTime.bind(this);
        this.oncontractLocation = this.oncontractLocation.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            name: '',
            location: '',
            email:'',
            password:'',
            rooms:[{roomNo:""}],
            status:'',
            businessPlan:'',
            expiryDate:'',
            contractTime:'',
            contractLocation:''
        }
    }
    onname(c) {
        this.setState({
          name: c.target.value
        });
      }
    onlocation(c) {
      this.setState({
      location: c.target.value
        });
      }
    onemail(c) {
        this.setState({
          email: c.target.value
        });
      }
    onpassword(c) {
        this.setState({
          password: c.target.value
        })
      }
    onrooms(c) {
        this.setState({
          rooms: c.target.value
        })
      }
    onstatus(c) {
        this.setState({
          status: c.target.value
        })
      }
      onbusinessPlan(c) {
        this.setState({
          businessPlan: c.target.value
        })
      }
      onexpiryDate(c) {
        this.setState({
          expiryDate: c.target.value
        })
      }
      oncontractTime(c) {
        this.setState({
          contractTime: c.target.value
        })
      }
      oncontractLocation(c) {
        this.setState({
          contractLocation: c.target.value
        })
      }
      
    
      onSubmit(c) {
        c.prcoworkingDefault();
        const obj = {
          name: this.state.name,
          location: this.state.location,
          email: this.state.email,
          password: this.state.password,
          businessPlan:this.state.businessPlan,
          rooms:this.state.rooms,
          status:this.state.status,
          expiryDate:this.state.expiryDate,
          contractTime:this.state.contractTime,
          contractLocation:this.state.contractLocation,
          rooms:this.state.rooms,
          


        };
        console.log(this.state)
       
        axios.post('http://localhost:4000/api/coworking/register/5ca0f7a134ede009c00c3f42/', {
          name: this.state.name,
          location: this.state.location,
          email: this.state.email,
          password: this.state.password,
          businessPlan:this.state.businessPlan,
          rooms:this.state.rooms,
          status:this.state.status,
          expiryDate:this.state.expiryDate,
          contractTime:this.state.contractTime,
          contractLocation:this.state.contractLocation,
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
            <h3>Update Coworking</h3>
            <form onSubmit={this.onSubmit}>
            
               

                <div className="form-group">
                    <label>Coworking Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.name}
                      onChange={this.onname}
                      />
                </div>
                <div className="form-group">
                    <label>Coworking Location: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.location}
                      onChange={this.onlocation}
                      />
                </div>
                <div className="form-group">
                    <label>Coworking E-mail: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.email}
                      onChange={this.onemail}
                      />
                </div>
               
                <div className="form-group">
                    <label>Coworking Password: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.password}
                      onChange={this.onpassword}
                      />
                </div>
                <div className="form-group">
                    <label>Coworking Business Plan: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.businessPlan}
                      onChange={this.onbusinessPlan}
                      />
                </div>
            
                <div className="form-group">
                    <label>Coworking Status: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.status}
                      onChange={this.onstatus}
                      />
                </div>
                <div className="form-group">
                    <label>Coworking Expiry Date: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.expiryDate}
                      onChange={this.onexpiryDate}
                      />
                </div>
                <div className="form-group">
                    <label>Coworking Contract Time: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.contractTime}
                      onChange={this.oncontractTime}
                      />
                </div>
                <div className="form-group">
                    <label>Coworking Contract Location: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.contractLocation}
                      onChange={this.oncontractLocation}
                      />
                </div>
                <div className="form-group">
               <label>rooms  </label>
               {this.state.rooms.map((room, roomName) => (
                <div className="rooms">
                  <input
                    type="text"
                    placeholder={`room ${roomName + 1} `}
                    value={room.name}
                    onChange={this.handleroomNameChange(roomName)}
                  />
                  <button
                    type="button"
                    onClick={this.handleRemoveroom(roomName)}
                    className="small"
                  >
                    -
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={this.handleAddroom}
                className="small"
              >
                Add
              </button>
               
               
               </div>
                <div className="form-group">
                    <input type="submit" value="Create" className="btn btn-primary" onClick ={this.clickMe.bind(this)} />
                </div>
            </form>
        </div>
        )
    }
    
    






  handleroomNameChange = roomName => coworking => {
    const newroom = this.state.rooms.map((room, rroomName) => {
      if (roomName !== rroomName) return room;
      return { ...room, name: coworking.target.value };
    });

    this.setState({ rooms: newroom });
  };

  handleAddroom = () => {
    this.setState({
      rooms: this.state.rooms.concat([{ name: "" }])
    });
  };

  handleRemoveroom = roomName => () => {
    this.setState({
      rooms: this.state.rooms.filter((r, rroomName) => roomName !== rroomName)
    });
  };









 
}
ReactDOM.render(
    <coworkingPost subreddit='reactjs' />,
      document.getElementById('root')
  )

export default coworkingUpdate;