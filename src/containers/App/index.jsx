import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Inbox } from '../../components/Inbox';

import './style.scss';

export const App = () => (
  <div className='app'>
    <Switch>
      <Route exact path='/inbox'><Inbox /></Route>
      <Redirect to='/inbox' />
    </Switch>
  </div>
);
