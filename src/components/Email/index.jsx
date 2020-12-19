import React from 'react';
import { formatShortDate, stripDomain } from '../../utils';

import './style.scss';

export const Email = ({ email, selectEmail, updateEmail, selected }) => {
  const starEmail = (e, clickedEmail) => {
    e.stopPropagation();
    updateEmail({ ...clickedEmail, starred: !clickedEmail.starred });
  }

  const bookmarkEmail = (e, clickedEmail) => {
    e.stopPropagation();
    updateEmail({ ...clickedEmail, important: !clickedEmail.important });
  }

  return (
    <div className={`email ${selected ? 'selected' : ''}`} onClick={() => selectEmail(email)}>
      <div className='email-cell email-icon'><i className={`${selected ? 'fas fa-check-square' : 'far fa-square'}`} /></div>
      <div className='email-cell email-icon'>
        <i className={`fa-star ${email.starred ? 'fas highlight' : 'far'}`} onClick={(e) => starEmail(e, email)} />
      </div>
      <div className='email-cell email-icon'>
        <i className={`fa-bookmark ${email.important ? 'fas highlight' : 'far'}`} onClick={(e) => bookmarkEmail(e, email)} />
      </div>
      <div className='email-cell email-sender'>{stripDomain(email.sender)}</div>
      <div className='email-cell email-content'>
        <span className='email-subject'>{email.subject}</span>{` - `}
        <span className='email-body'>{email.plainBody}</span>
      </div>
      <div className='email-cell email-date'>{formatShortDate(email.date)}</div>
    </div>
  );
};
