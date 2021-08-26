import React from 'react';
import { Progress, Spinner, Container, Button, Form, FormGroup, Label, Input, Badge } from 'reactstrap';
import { connect } from 'react-redux';

const Miner = (props) => {

  let _Acc = null;
  
  function handleSubmission(event) {
    const { dispatch } = props;
    event.preventDefault();
    const action = {
      type: 'MINE_PENDING_TRANSACTION',
      acc: _Acc.value
    };
    dispatch(action);
    _Acc.value='';
  }

  return (
    <div>
      <style jsx>{`
          #spinner {
            display: none;
          }
          `}</style>
      <Container>
      	  <br/>
      	  <br/>
          <Form onSubmit={handleSubmission} inline>
	        <FormGroup>
	          <Label for="exampleEmail" hidden>Name</Label>
	          <Input placeholder="Name" innerRef={(Input) => {_Acc = Input;}}/>
	        </FormGroup>
	        {' '}
	        <FormGroup>
	          <Label for="examplePassword" hidden>Password</Label>
	          <Input type="password" name="password" id="examplePassword" placeholder="Password" />
	        </FormGroup>
	        {' '}
	        <Button type='submit'>mine current block</Button>
      	  </Form>
      	  <br/>
      	  <Button color="primary" outline>
          	current transactions <Badge color="secondary">{props.masterList.pendingTransactions.length}</Badge>
          </Button>
          <br/>
          <br/>
	        <Spinner id="spinner" style={{ width: '3rem', height: '3rem' }} />{' '}
      </Container>
    </div>
  );
};

export default connect()(Miner);