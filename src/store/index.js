import { combineReducers } from 'redux';
import emailsReducer from './emails';
import filtersReducer from './filters';

const reducers = combineReducers({
  emails: emailsReducer,
  filter: filtersReducer
});

export default reducers;
