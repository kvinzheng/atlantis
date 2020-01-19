import { combineReducers } from 'redux';
import programs from './programs';
import students from './students';
import applications from "./applications";

const rootReducer = combineReducers({
  programs,
  students,
  applications
});

export default rootReducer;
