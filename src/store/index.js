import { combineReducers } from 'redux';
import { reducer } from './emails';

const reducers = combineReducers({
  emails: reducer
});

export default reducers;
