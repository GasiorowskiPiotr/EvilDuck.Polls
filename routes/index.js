import express from 'express';
import React from 'react';
import ReactRouter from 'react-router';
import Routes from '../client/routes.jsx';

let router = express.Router()
/* GET home page. */
router.get('/', (req, res, next) => {
  console.log(req.path);
  ReactRouter.run(Routes, req.path, (Root) => {
    var html = React.renderToString(React.createElement(Root));
    res.render('index', {initHtml: html});
  });
});

module.exports = router;
