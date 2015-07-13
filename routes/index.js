var express = require('express');
var router = express.Router();
var React = require('react');
var ReactRouter = require('react-router');
var Routes = require('../client/routes.jsx');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.path);
  ReactRouter.run(Routes, req.path, (Root) => {
    var html = React.renderToString(React.createElement(Root));
    console.log(html);
    res.render('index', {initHtml: html});
  });
});

module.exports = router;
