import React, {Component} from 'react';
import {Link} from 'react-router';

class AppRoot extends Component {
  render() {
    return (
      <div>
        <h2>React Universal App</h2>
        <Link to="/home"> Home </Link>
        {this.props.children}
      </div>
    );
  }
}

export default AppRoot;