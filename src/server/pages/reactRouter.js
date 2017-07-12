require('babel-register')({ presets: [ 'react','es2015' ]});

import React, {Component} from 'react'
import {renderToString} from 'react-dom/server'
import {RouterContext, match, createRoutes} from 'react-router'
import appRouter from './../../browser/router'
import auth from './../auth/auth'

const router = require('express').Router();
const routes = createRoutes(appRouter())

/** React Magic */
router.get('/', (req, res, next) => {
  match({routes: routes[0], location: req.url}, (error, redirectLocation, renderProps) => {
    if (error) {
      next(err);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      const content = renderToString(<RouterContext {...renderProps}/>);
      res.render('spa', {title: 'Express', data: false, content});
    } else {
      res.status(404).send('Not Found');
    }
  });
});

module.exports = router;