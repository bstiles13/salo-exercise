import React from 'react';
import { connect } from 'react-redux';
import { Email } from '../../components/Email';

import './style.scss';

export const Inbox = ({ emails }) => {
  const renderEmails = () => {
    return emails.map((email, i) => (
      <Email key={`email-${i}`} email={email} />
    ))
  }

  return (
    <div className='inbox'>{renderEmails()}</div>
  );
};

const mapStateToProps = (state) => ({
  emails: state.emails.emails
})

export default connect(mapStateToProps, null)(Inbox);
