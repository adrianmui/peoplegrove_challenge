const React = require('react');
const { Router, browserHistory } = require('react-router');
const routes = require('./routes');

export default class AppRoutes extends React.Component {
  render() {
    return (
      <Router history={browserHistory} routes={routes} onUpdate={() => window.scrollTo(0, 0)}/>
    );
  }
}