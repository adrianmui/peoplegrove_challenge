import React, {Component} from 'react';
import {Link} from 'react-router';
import Landing from './Landing';
import PropTypes from 'prop-types';

class AppRoot extends Component {
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <a href="#" className="navbar-brand">PeopleGrove React</a>
        </nav>
        <Landing />
        {this.props.children}
      </div>
    );
  }
}

AppRoot.propTypes = {
//  children: PropTypes.element.isRequired
}

export default AppRoot;