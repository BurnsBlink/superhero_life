import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import Layout from '../components/Layout';
import Home from '../containers/Home';
import Teams from '../containers/Teams';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render() {
    return(
      <Router history={browserHistory}>
        <Route component={Layout}>
          <Route path="/" component={Home}/>
          <Route path="/teams" component={Teams}/>
        </Route>
      </Router>
    )
  }
}

export default App;
