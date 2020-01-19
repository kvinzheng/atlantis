import { combineReducers } from 'redux';
import programs from './programs';
import program from './program';
import students from './students';
import student from './student';
import applications from "./applications";

const rootReducer = combineReducers({
  program,
  programs,
  students,
  student,
  applications
});

export default rootReducer;
