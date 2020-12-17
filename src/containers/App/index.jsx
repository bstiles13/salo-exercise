import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Inbox } from '../Inbox';
import { Navbar } from '../Navbar';
import { Sidebar } from '../Sidebar';

import './style.scss';

export const App = () => (
  <div className='app'>
    <Navbar />
    <div className='app-content'>
    <Sidebar />
    <Switch>
      <Route exact path='/inbox'><Inbox /></Route>
      <Redirect to='/inbox' />
    </Switch>
    </div>
  </div>
);
