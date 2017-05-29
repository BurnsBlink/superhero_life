import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

class Layout extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render() {
    return(
      <div className="row">
        <div className="nav-bar small-3 medium-2 large-1 columns">
          <ul>
            <li><Link className="links" to={`/`}>Home</Link></li>
            <li><Link className="links" to={`teams`}>Teams</Link></li>
          </ul>
        </div>
        <div className="small-9 medium-10 large-11 columns">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Layout;
