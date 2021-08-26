import React from 'react';
import { Table, Container } from 'reactstrap';
import { connect } from 'react-redux';
import Data from './Data.jsx'

function CDB(props) {
    return (
      <Container>
      	  <br/>
      	  <br/>
	      <Table striped>
	        <thead>
	          <tr>
	            <th>Id</th>
	            <th>From</th>
	            <th>to</th>
	            <th>$</th>
	          </tr>
	        </thead>
	        <tbody>
              {Object.keys(props.masterList.pendingTransactions).map(function(activityId) {
		        var content = props.masterList.pendingTransactions[activityId];
		        return <Data
		          fromAcc={content.fromAddress}
		          toAcc={content.toAddress}
		          money={content.amount}
		          key={activityId}
		          activityId={activityId}/>;
		      	}
		      )}
	        </tbody>
	      </Table>
      </Container>
    );
}

export default connect()(CDB);