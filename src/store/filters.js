import { FILTERS } from '../constants';

// Action types
// ----------------------------------------------------------------------------

export const SET_FILTER = 'SET_FILTER';

// Initial state
// ----------------------------------------------------------------------------

export const INITIAL_STATE = {
  filter: FILTERS[0]
};

// Reducer
// ----------------------------------------------------------------------------

export function reducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case SET_FILTER:
      return { ...state, filter: payload};
    default:
      return state;
  }
}

// Action creators
// ----------------------------------------------------------------------------

export const setFilter = (payload) => ({
  type: SET_FILTER,
  payload
})

export default reducer;