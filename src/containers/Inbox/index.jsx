import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Email } from '../../components/Email';
import { filterEmails, setSelectedEmail } from '../../store/emails';

import './style.scss';

export const Inbox = ({ emails, selectedEmail, filter, setSelectedEmail, history }) => {
  const selectEmail = (email) => {
    setSelectedEmail(email);
    history.push(`/view/${email.id}`);
  }

  const renderEmails = () => {
    return emails.map((email, i) => (
      <Email key={`email-${i}`} email={email} selectEmail={selectEmail} selected={selectedEmail.id === email.id} />
    ))
  }

  return (
    <div className='inbox'>
      <div className='inbox-header'>
        <div className={`inbox-header-label ${filter.name}-label`}>
          {filter.name === 'inbox' ? filter.name : `Category: ${filter.name}` }
        </div>
        <div className='inbox-header-count'><span>{`${emails.length} of ${emails.length}`}</span></div>
      </div>
      {renderEmails()}
    </div>
  );
};

const mapStateToProps = (state) => ({
  filter: state.filter.filter,
  emails: filterEmails(state),
  selectedEmail: state.emails.selectedEmail
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setSelectedEmail
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Inbox));
