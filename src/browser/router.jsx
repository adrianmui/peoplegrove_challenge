import React from 'react';
import {Router, browserHistory, Route} from 'react-router';

import AppRoot from './AppRoot.jsx';
import Home from './Home.jsx';

const AppRouter = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={AppRoot}>
        <Route path="/home" component={Home}/>
      </Route>
    </Router>
  );
};

export default AppRouter;