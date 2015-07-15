import React from 'react';
import Routes from './routes.jsx';
import Router from 'react-router';

Router.run(Routes, Router.HistoryLocation, (Root) => {
  React.render(<Root/>, document.getElementById('client'));
});
