import { combineReducers } from 'redux';
import programs from './programs';
import students from './students';

const rootReducer = combineReducers({
  programs,
  students
});

export default rootReducer;
