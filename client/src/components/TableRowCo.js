import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
// import Edit from './components/Edit'
class TableRowCo extends Component {

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
</tr>
);
}
}
export default TableRowCo;
