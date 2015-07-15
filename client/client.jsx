import React from 'react';
import Routes from './routes.jsx';
import Router from 'react-router';
import AppContext from './appContext.js';

Router.run(Routes, Router.HistoryLocation, (Root) => {
  AppContext.IsClient(true);
  React.render(<Root/>, document.getElementById('client'));
});
