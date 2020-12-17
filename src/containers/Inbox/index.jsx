import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { stripDomain } from '../../utils';

import './style.scss';

export const Inbox = ({ emails }) => {
  
  const formatDate = (isoDate) => {
    const date = moment(isoDate);

    if (!date.isValid()) return isoDate;

    if (date.isSame(moment(), 'day')) {
      return date.format('H:mm A')
    }

    if (date.isSame(moment(), 'year')) {
      return date.format('MMM DD')
    }

    return date.format('M/D/YYYY');
  }

  const renderEmails = () => {
    return emails.map((email, i) => {
      return (
        <div key={`email-${i}`} className='email'>
          <div className='email-cell email-sender'>{stripDomain(email.sender)}</div>
          <div className='email-cell email-content'>
            <span className='email-subject'>{email.subject}</span>{` - `}
            <span className='email-body'>{email.plainBody}</span>
          </div>
          <div className='email-cell email-date'>{formatDate(email.date)}</div>
        </div>
      )
    })
  }

  return (
    <div className='inbox'>{renderEmails()}</div>
  );
};

const mapStateToProps = (state) => ({
  emails: state.emails.emails
})

export default connect(mapStateToProps, null)(Inbox);
