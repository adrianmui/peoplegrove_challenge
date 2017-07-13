import React from 'react';
import {Router, browserHistory, Route } from 'react-router';


import AppRoot from './AppRoot';
import Landing from './Landing';
import List from './List';

const AppRouter = () => {
  return (
    <Router history={browserHistory}>
      <Route path="spa" component={AppRoot}>
        <Route path="home" component={Landing}/>
        <Route path="list" component={List}/>
      </Route>
    </Router>
  );
};


export default AppRouter;