import React, { Component } from 'react';
import { Switch, Route, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './components/Header.jsx';
import User from './components/User.jsx';
import CDB from './components/CDB.jsx';
import Miner from './components/Miner.jsx';
import Error404 from './components/Error404';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' render={()=><Header />} />
          <Route path='/user' render={()=><User/>} />
          <Route path='/miner' render={()=><Miner masterList={this.props.masterActivityList}/>} />
          <Route path='/CDB' render={()=><CDB masterList={this.props.masterActivityList}/>} />
          <Route component={Error404}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    masterActivityList: state.masterActivityList
  };
};

export default withRouter(connect(mapStateToProps)(App));
