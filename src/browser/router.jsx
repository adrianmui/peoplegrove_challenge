import React from 'react';
import {Router, browserHistory, Route } from 'react-router';
import AppRoot from './AppRoot';

const AppRouter = () => {
  return (
    <Router history={browserHistory}>
      <Route path="spa" component={AppRoot}>
      </Route>
    </Router>
  );
};


export default AppRouter;