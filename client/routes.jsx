import React from 'react';
import { Route, DefaultRoute } from 'react-router';
import Main from './main.jsx';
import Home from './home.jsx';

var routes = (
  <Route path="/" handler={Main}>
    <DefaultRoute handler={Home} />
  </Route>
);

module.exports = routes;
