import { combineReducers } from 'redux';
import programs from './programs';
import program from './program';
import students from './students';
import applications from "./applications";

const rootReducer = combineReducers({
  program,
  programs,
  students,
  applications
});

export default rootReducer;
