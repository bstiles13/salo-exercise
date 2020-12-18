import React from 'react';
import { formatShortDate, stripDomain } from '../../utils';

import './style.scss';

export const Email = ({ email, selectEmail, selected }) => {
  return (
    <div className={`email ${selected ? 'selected' : ''}`} onClick={() => selectEmail(email)}>
      <div className='email-cell email-icon'><i className={`${selected ? 'fas fa-check-square' : 'far fa-square'}`} /></div>
      <div className='email-cell email-icon'><i className='far fa-star' /></div>
      <div className='email-cell email-icon'><i className='far fa-bookmark' /></div>
      <div className='email-cell email-sender'>{stripDomain(email.sender)}</div>
      <div className='email-cell email-content'>
        <span className='email-subject'>{email.subject}</span>{` - `}
        <span className='email-body'>{email.plainBody}</span>
      </div>
      <div className='email-cell email-date'>{formatShortDate(email.date)}</div>
    </div>
  );
};
