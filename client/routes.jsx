import React from 'react';
import { Route, DefaultRoute } from 'react-router';
import Main from './main.jsx';
import Home from './home.jsx';

var routes = (
  <Route path="/" handler={Main}>
    <DefaultRoute handler={Home} name="Home" />
    <Route path="first" name="First" handler={Home} />
    <Route path="second" name="Second" handler={Home} />
    <Route path="third" name="Third" handler={Home} />
  </Route>
);

module.exports = routes;
