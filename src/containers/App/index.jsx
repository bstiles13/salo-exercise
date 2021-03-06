import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchEmails } from '../../store/emails';
import Navbar from '../Navbar';
import Inbox from '../Inbox';
import ViewEmail from '../ViewEmail';
import Sidebar from '../Sidebar';

import './style.scss';

export const App = ({ fetchEmails }) => {
  useEffect(() => {
    fetchEmails();
  }, [fetchEmails]);

  return (
    <div className='app'>
      <Navbar />
      <div className='app-content'>
        <Sidebar />
        <Switch>
          <Route exact path='/inbox'><Inbox /></Route>
          <Route path='/view/:id'><ViewEmail /></Route>
          <Redirect to='/inbox' />
        </Switch>
      </div>
    </div>
  )
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchEmails
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(App);
