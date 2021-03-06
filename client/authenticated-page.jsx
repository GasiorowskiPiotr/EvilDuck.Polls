import React from 'react';
import AppContext from './appContext.js';

export default class AuthenticatedPage extends React.Component {
  static willTransitionTo(transition) {
      if(AppContext.GetIsClient()) {
        if (false) {
          transition.redirect('/login', {}, {'nextPath' : transition.path});
        }
      }
    }
}
