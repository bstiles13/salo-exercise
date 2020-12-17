import axios from 'axios';

// Action types
// ----------------------------------------------------------------------------

export const FETCH_EMAILS_REQUEST = 'FETCH_EMAILS_REQUEST';
export const FETCH_EMAILS_SUCCESS = 'FETCH_EMAILS_SUCCESS';
export const FETCH_EMAILS_FAILURE = 'FETCH_EMAILS_REQUEST';

// Initial state
// ----------------------------------------------------------------------------

export const INITIAL_STATE = {
  emails: [],
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
      payload: res.data?.messages || []
    });
  } catch (error) {
    dispatch({ type: FETCH_EMAILS_FAILURE });
    throw Error(error);
  }
};
