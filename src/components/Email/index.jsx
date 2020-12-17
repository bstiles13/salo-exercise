import React from 'react';
import { formatDate, stripDomain } from '../../utils';

import './style.scss';

export const Email = ({ email }) => {
  return (
    <div className='email'>
      <div className='email-cell email-sender'>{stripDomain(email.sender)}</div>
      <div className='email-cell email-content'>
        <span className='email-subject'>{email.subject}</span>{` - `}
        <span className='email-body'>{email.plainBody}</span>
      </div>
      <div className='email-cell email-date'>{formatDate(email.date)}</div>
    </div>
  );
};
