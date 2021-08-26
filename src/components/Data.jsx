import React from 'react';
import { connect } from 'react-redux';

function Data(props) {
    return (
	  <tr>
	    <th scope="row">{props.activityId}</th>
	    <td>{props.fromAcc}</td>
	    <td>{props.toAcc}</td>
	    <td>{props.money}</td>
	  </tr>
    );
}

export default connect()(Data);