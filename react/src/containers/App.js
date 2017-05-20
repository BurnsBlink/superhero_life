import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import Home from '../containers/Home';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render() {
    return(
      <Router history={browserHistory}>
        <Route>
          <Route path="/" component={Home}/>
        </Route>
      </Router>
    )
  }
}

export default App;
