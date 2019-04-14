import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
// import Edit from './components/Edit'
class TableRow extends Component {
constructor(props) {
super(props);
this.delete = this.delete.bind(this);
this.edit = this.edit.bind(this);
}
// http://localhost:4000/event/delete/5ca0f7a134ede009c00c3f42
// '+this.props.obj._i
delete() {
axios.delete('http://localhost:4000/api/event/delete/'+this.props.obj._id)
.then(console.log('Deleted'))
.then(window.parent.location = window.parent.location.href)
.catch(err => console.log(err))
}
edit(){
axios.put('http://localhost:4000/api/event/update/'+this.props.obj_id, {
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
clickMe()
{
// this.delete();
// window.parent.location = window.parent.location.href;
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
<Link to={"/event/update/"+this.props.obj._id} className="btn btn-primary"
onClick="edit">Edit</Link>
</td>
<td>
<button onClick={this.delete}className="btn btn-danger">Delete</button >
</td>
</tr>
);
}
}
export default TableRow;
