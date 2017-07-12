require('babel-register')({
   presets: [ 'react','es2015' ]
});

const router = require('express').Router();
const auth = require('./../auth/auth');

const React = require('React');
const { renderToString } = require('react-dom/server');
const ReactRouter = require('react-router');
const { match, RouterContext } = ReactRouter;
const routes = require('./../../browser/routes');

const NotFoundPage = require('./../../browser/notFound');

const App = require('./../../browser/App');

router.get('/', function(req, res) {
    let options = { user: req.user}
    res.render('./index', options);
});

router.get('/login', auth.loginRedirect, function(req, res) {
    res.render('login', {message: ''});
});

/** React Magic */
// router.get('/spa', auth.loginRedirect, function(req, res, next) {
//    match({ routes, location: req.url },
//     (err, redirectLocation, renderProps) => {
//       // in case of error display the error message
//       if (err) {
//         next(err);
//       }

//       // in case of redirect propagate the redirect to the browser
//       if (redirectLocation) {
//         return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
//       }

//       // generate the React markup for the current route
//       let markup;
//       if (renderProps) {
//         markup = renderToString(<RouterContext {...renderProps}/>);
//         // if the current route matched we have renderProps
//         // res.status(200).send(ReactDOMServer.renderToString(React.createElement(RouterContext,renderProps)));

//       } else {
//         // otherwise we can render a 404 page
//         // markup = renderToString(React.createElement(NotFoundPage));
//         // res.status(404);
//       }

//       // render the index template with the embedded React markup
//       return res.render('spa', { markup });
//     }
//   );
// });

router.use(handleRender);

function handleRender(req, res) {
  // Render the component to a string
  const html = renderToString(
      <App />
  )

  // Send the rendered page back to the client
  res.send(renderFullPage(html))
}

function renderFullPage(html) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script src="js/bundle.js"></script>
      </body>
    </html>
    `
}

module.exports = router;