require('babel-register')({ presets: [ 'react','es2015' ]});

import React, {Component} from 'react'
import {renderToString} from 'react-dom/server'
import {RouterContext, match, createRoutes} from 'react-router'
import appRouter from './router'

const router = require('express').Router();
const routes = createRoutes(appRouter())

class DataProvider extends Component {
  getChildContext() {
    return {data: this.props.data};
  }
  render() {
    return <RouterContext {...this.props}/>;
  }
}
DataProvider.propTypes = {
  data: React.PropTypes.object
};
DataProvider.childContextTypes = {
  data: React.PropTypes.object
};

/** React Magic */
router.get('/spa', (req, res, next) => {
  match({routes: routes, location: req.url}, (error, redirectLocation, renderProps) => {
    console.log(`routes, ${routes[0]}`)
    console.log(`redirectLocation, ${redirectLocation}`)
    console.log(`renderProps, ${renderProps}`)
    
    if (error) {
      next(err);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      const content = renderToString(<RouterContext {...renderProps}/>);
      res.render('spa', {title: 'Express', data: false, user: req.user, content});
    } else {
      res.status(404).send('Not Found');
    }
  });
});

// router.get('/home', (req, res) => {
//   match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
//     if (error) {
//       res.status(500).send(error.message);
//     } else if (redirectLocation) {
//       res.redirect(302, redirectLocation.pathname + redirectLocation.search);
//     } else if (renderProps) {
//       const content = renderToString(<RouterContext {...renderProps}/>);
//       res.render('spa', {title: 'Express', data: false, content});
//     } else {
//       res.status(404).send('Not Found');
//     }
//   });
// });
// router.get('/list', (req, res) => {
//   match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
//     if (error) {
//       res.status(500).send(error.message);
//     } else if (redirectLocation) {
//       res.redirect(302, redirectLocation.pathname + redirectLocation.search);
//     } else if (renderProps) {
//       request('http://jsonplaceholder.typicode.com/users', (error, response, body) => {
//         const data = {items: JSON.parse(body)};
//         const content = renderToString(<DataProvider {...renderProps} data={data}/>);
//         res.render('spa', {title: 'Express', data, content});
//       });
//     } else {
//       res.status(404).send('Not Found');
//     }
//   });
// });

module.exports = router;