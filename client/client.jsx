import React from 'react';
import Routes from './routes.jsx';
import Router from 'react-router';
import AppContext from './appContext.js';

AppContext.SetIsClient(true);

Router.run(Routes, Router.HistoryLocation, (Root) => {
  React.render(<Root/>, document.getElementById('client'));
});
