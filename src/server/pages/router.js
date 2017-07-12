require('babel-register')({ presets: [ 'react','es2015' ]});

const router = require('express').Router();
const auth = require('./../auth/auth');

// const React = require('React');
// const { renderToString } = require('react-dom/server');
// const { match, RouterContext, createRoutes } = require('react-router');
// const appRouter = require('./../../browser/router.jsx');


import React, {Component} from 'react';
import {renderToString} from 'react-dom/server';
import {RouterContext, match, createRoutes} from 'react-router';
import appRouter from './../../browser/router';

const routes = createRoutes(appRouter());

// router.get('/', function(req, res) {
//     let options = { user: req.user}
//     res.render('./index', options);
// });

router.get('/login', auth.loginRedirect, function(req, res) {
    res.render('login', {message: ''});
});

/** React Magic */
router.get('/', function(req, res, next) {
  console.log(req.url);
  console.log(routes[0]);
  match({routes: routes[0], location: req.url}, (error, redirectLocation, renderProps) => {
    console.log(error);
    console.log(redirectLocation);
    console.log(renderProps);
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