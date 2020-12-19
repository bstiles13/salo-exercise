import axios from 'axios';
import { stripHtml } from '../utils';

// Action types
// ----------------------------------------------------------------------------

export const FETCH_EMAILS_REQUEST = 'FETCH_EMAILS_REQUEST';
export const FETCH_EMAILS_SUCCESS = 'FETCH_EMAILS_SUCCESS';
export const FETCH_EMAILS_FAILURE = 'FETCH_EMAILS_REQUEST';
export const SET_SELECTED_EMAIL = 'SET_SELECTED_EMAIL';
export const UPDATE_EMAIL = 'UPDATE_EMAIL';

// Initial state
// ----------------------------------------------------------------------------

export const INITIAL_STATE = {
  emails: [],
  selectedEmail: {},
  isFetching: false
};

// Reducer
// ----------------------------------------------------------------------------

export function reducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case FETCH_EMAILS_REQUEST:
      return { ...state, isFetching: true };
    case FETCH_EMAILS_SUCCESS:
      return { ...state, isFetching: false, emails: payload };
    case FETCH_EMAILS_FAILURE:
      return { ...state, isFetching: false };
    case SET_SELECTED_EMAIL:
      return { ...state, selectedEmail: payload };
    case UPDATE_EMAIL:
      return { ...state, emails: payload };
    default:
      return state;
  }
}

// Action creators
// ----------------------------------------------------------------------------

export const fetchEmails = () => async (dispatch) => {
  dispatch({ type: FETCH_EMAILS_REQUEST });
  try {
    const res = await axios.get('/api/emails');
    dispatch({
      type: FETCH_EMAILS_SUCCESS,
      payload: mapAndSortEmails(res)
    });
  } catch (error) {
    dispatch({ type: FETCH_EMAILS_FAILURE });
    throw Error(error);
  }
};

export const setSelectedEmail = (email) => ({
  type: SET_SELECTED_EMAIL,
  payload: email
});

export const updateEmail = (email) => (dispatch, getStore) => {
  const currentEmails = getStore().emails.emails;
  const nextEmails = currentEmails.map(currEmail => currEmail.id === email.id ? email : currEmail);
  dispatch({
    type: UPDATE_EMAIL,
    payload: nextEmails
  })
}

// Helpers
// ----------------------------------------------------------------------------

const mapAndSortEmails = (response) => {
  let emails = response.data?.messages || [];
  emails = emails.map(email => ({ ...email, plainBody: stripHtml(email.body) }));
  return emails.sort((a, b) => b.date.localeCompare(a.date))
}

export default reducer;

// Selectors
// ----------------------------------------------------------------------------

export const filterEmails = (state) => {
  const filter = state.filter.filter;

  if (!filter || filter.name === 'inbox') return state.emails.emails;

  if (filter.type === 'primary') {
    return state.emails.emails.filter(email => !!email[filter.name]);
  }

  if (filter.type === 'tag') {
    return state.emails.emails.filter(email => email.tags.includes(filter.name));
  }

  // default
  return state.emails.emails;
}
