const React = require('react');
const { Route, IndexRoute } = require('react-router');
const Layout = require('./layout');
const NotFound = require('./notFound');

const routes = (props) => (
  <Route path="/" component={Layout}>
    <Route path="*" component={NotFound}/>
  </Route>
);

export default routes;