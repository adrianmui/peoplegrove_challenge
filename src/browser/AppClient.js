const React = require('react');
const ReactDOM = require('react-dom');
const AppRoutes = require('./AppRoutes');

window.onload = () => {
  ReactDOM.render(<AppRoutes/>, document.getElementById('main'));
};