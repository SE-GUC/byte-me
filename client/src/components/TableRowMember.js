import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
// import Edit from './components/Edit'
class TableRowMember extends Component {
constructor(props) {
super(props);
this.apply = this.apply.bind(this);
}
// http://localhost:4000/event/delete/5ca0f7a134ede009c00c3f42
// '+this.props.obj._i

edit(){
axios.put('http://localhost:4000/api/event/applyevent/'+this.props.obj_id, {
type: this.state.type,
eventName: this.state.eventName,
eventDate: this.state.eventDate,
eventDuration: this.state.eventDuration,
eventLocation: this.state.eventLocation,
eventDescription: this.state.eventDescription
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
    axios.put('http://localhost:4000/api/event/applyevent/5ca0c819f792812168c302e0/'+this.props.obj._id)
    .then(console.log('Applied'))
    .then(window.parent.location = window.parent.location.href)
    .then(alert("You have applied for this event successfully!"))

    .catch(err => console.log(err))
  }
render() {
return (
<tr>
<td>
{this.props.obj.type}
</td>
<td>
{this.props.obj.eventName}
</td>
<td>
{this.props.obj.eventDescription}
</td>
<td>
{this.props.obj.eventLocation}
</td>
<td>
{this.props.obj.eventDuration}
</td>
<td>
{this.props.obj.eventDate}
</td>
<td>
  <button onClick={this.apply}className="btn btn-danger">Apply</button >
  </td>
</tr>
);
}
}
export default TableRowMember;
