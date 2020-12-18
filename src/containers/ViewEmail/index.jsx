import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { filterEmails, setSelectedEmail } from '../../store/emails';
import { formatLongDate } from '../../utils';

import './style.scss';

export const ViewEmail = ({ emails, selectedEmail, setSelectedEmail, history }) => {
  useEffect(() => {
    Object.keys(selectedEmail).length === 0 && history.push('/inbox');
  }, [selectedEmail, history])

  const emailIndex = emails.findIndex(email => email.id === selectedEmail.id);

  const closeViewEmail = () => history.push('/inbox');

  const selectEmail = (email) => {
    setSelectedEmail(email);
    history.push(`/view/${email.id}`);
  }

  const openPreviousEmail = () => {
    if (emailIndex === 0) return;
    selectEmail(emails[emailIndex - 1]);
  }

  const openNextEmail = () => {
    if (emailIndex === (emails.length - 1)) return;
    selectEmail(emails[emailIndex + 1]);
  }

  return (
    <div className='view-email'>
      <div className='view-email-section view-email-controls'>
        <div className='view-email-controls-left'>
          <i className='fas fa-arrow-left' onClick={closeViewEmail} />
        </div>
        <div className='view-email-controls-right'>
          {`${emailIndex + 1} of ${emails.length}`}
          <i className='fas fa-chevron-left' onClick={openPreviousEmail} />
          <i className='fas fa-chevron-right' onClick={openNextEmail} />
        </div>
      </div>
      <div className='view-email-section view-email-subject'>
        <div>{selectedEmail.subject}</div>
      </div>
      <div className='view-email-section view-email-header'>
        <div className='view-email-header-left'>
          <div className='view-email-header-sender'>{selectedEmail.sender}</div>
          <span>to me</span>
        </div>
        <div className='view-email-header-left'>
          {formatLongDate(selectedEmail.date)}
        </div>
      </div>
      <div className='view-email-section view-email-body'>
        {selectedEmail.plainBody}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  emails: filterEmails(state),
  selectedEmail: state.emails.selectedEmail
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setSelectedEmail
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ViewEmail));
