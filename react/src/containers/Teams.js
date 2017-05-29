import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

class Teams extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render() {
    return(
      <div className="row">
        <div className="small-12 columns">
          <h1 className="title">Your Teams</h1>
        </div>
      </div>
    )
  }
}

export default Teams;
