import { combineReducers } from 'redux';
import programs from './programs';
import program from './program';
import students from './students';
import student from './student';
import applications from "./applications";
import application from "./application";

const rootReducer = combineReducers({
  program,
  programs,
  students,
  student,
  applications,
  application
});

export default rootReducer;
