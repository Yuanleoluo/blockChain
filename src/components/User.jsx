import React from 'react';
import { InputGroup, InputGroupAddon, Input, Container, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { v4 } from 'uuid';

function User(props){
  let _fromAcc = null;
  let _toAcc = null;
  let _money = null;

  function handleNewActivitySubmission(event) {
    const { dispatch } = props;
    event.preventDefault();
    const action = {
      type: 'ADD_ACTIVITY',
      id: v4(),
      fromAcc: _fromAcc.value,
      toAcc: _toAcc.value,
      money: _money.value
    };
    dispatch(action);
    _fromAcc.value='';
    _toAcc.value='';
    _money.value='';
  }

  return (
    <div>
      <Container>
      	  <br/>
      	  <br/>
        <form onSubmit={handleNewActivitySubmission}>
	      <InputGroup>
	        <InputGroupAddon addonType="prepend">From</InputGroupAddon>
	        <Input 
	        	placeholder="username" 
	        	innerRef={(Input) => {_fromAcc = Input;}}/>
	      </InputGroup>
	      <br />
	      <InputGroup>
	        <Input 
	        	placeholder="username" 
	        	innerRef={(Input) => {_toAcc = Input;}}/>
	        <InputGroupAddon addonType="append">To</InputGroupAddon>
	      </InputGroup>
	      <br />
	      <InputGroup>
	        <InputGroupAddon addonType="prepend">$</InputGroupAddon>
	        <Input 
	        	placeholder="Amount" 
	        	type="number" step="1" 
	        	innerRef={(Input) => {_money = Input;}}/>
	        <InputGroupAddon addonType="append">.00</InputGroupAddon>
	      </InputGroup>
	      <br />
	      <Button type='submit'>Submit</Button>
	    </form>
      </Container>
    </div>
  );
};

export default connect()(User);