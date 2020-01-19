import axios from "../../axios/axios";

import {
  LOAD_ALL_PROGRAMS,
  SEARCH_PROGRAM,
  LOAD_ALL_STUDENTS,
  SEARCH_STUDENT
} from "./type";

export const fetchPrograms = () => {
  return async dispatch => {
    const response = await axios.get("./programs?page_size=10");
    const programs = response.data.data.targets;
    dispatch({ type: LOAD_ALL_PROGRAMS, payload: programs });
  };
};

export const searchProgram = name => {
  return async dispatch => {
    const response = await axios.get(
      `./search/programs?keyword=${name}&column=company_name&page_num=10`
    );
    const programs = response.data.data.targets;
    dispatch({ type: SEARCH_PROGRAM, payload: programs });
  };
};

export const fetchStudents = () => {
  return async dispatch => {
    const response = await axios.get("./students?page_size=10");
    const programs = response.data.data.targets;
    dispatch({ type: LOAD_ALL_STUDENTS, payload: programs });
  };
};
