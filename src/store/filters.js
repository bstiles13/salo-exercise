import { FILTERS } from '../constants';

// Action types
// ----------------------------------------------------------------------------

export const SET_SIDEBAR_FILTER = 'SET_SIDEBAR_FILTER';
export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';

// Initial state
// ----------------------------------------------------------------------------

export const INITIAL_STATE = {
  filter: FILTERS[0],
  searchTerm: null
};

// Reducer
// ----------------------------------------------------------------------------

export function reducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case SET_SIDEBAR_FILTER:
      return { ...state, filter: payload };
    case SET_SEARCH_TERM:
      return { ...state, searchTerm: payload };
    default:
      return state;
  }
}

// Action creators
// ----------------------------------------------------------------------------

export const setSidebarFilter = (payload) => ({
  type: SET_SIDEBAR_FILTER,
  payload
})

export const setSearchTerm = (payload) => ({
  type: SET_SEARCH_TERM,
  payload
})

export default reducer;