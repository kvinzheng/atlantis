import axios from "../../axios/axios";

import {
  LOAD_ALL_PROGRAMS,
  SEARCH_PROGRAM,
  LOAD_ALL_STUDENTS,
  SEARCH_STUDENT,
  LOAD_ALL_APPLICATIONS,
  SEARCH_APPLICATION
} from "./type";

export const fetchPrograms = () => {
  return async dispatch => {
    const response = await axios.get("./programs?page_size=50");
    const programs = response.data.data.targets;
    dispatch({ type: LOAD_ALL_PROGRAMS, payload: programs });
  };
};

export const searchProgram = name => {
  return async dispatch => {
    const response = await axios.get(
      `./search/programs?keyword=${name}&column=company_name&page_size=50`
    );
    const programs = response.data.data.targets;
    dispatch({ type: SEARCH_PROGRAM, payload: programs });
  };
};

export const fetchStudents = () => {
  return async dispatch => {
    const response = await axios.get("./students?page_size=50");
    const programs = response.data.data.targets;
    dispatch({ type: LOAD_ALL_STUDENTS, payload: programs });
  };
};


export const searchStudent = (name) => {
  return async dispatch => {
    const response = await axios.get(`./search/students?keyword=${name}&column=first_name&page_size=50`);
    const students = response.data.data.targets;
    dispatch({ type: SEARCH_STUDENT, payload: students });
  };
};

export const fetchApplications = () => {
  return async dispatch => {
    const response = await axios.get("./applications?page_size=50");
    const applications = response.data.data.targets;
    dispatch({ type: LOAD_ALL_APPLICATIONS, payload: applications });
  };
};

export const searchApplication = name => {
  return async dispatch => {
    const response = await axios.get(
      `./search/applications?keyword=${name}&column=company_name&page_size=50`
    );
    const applications = response.data.data.targets;
    dispatch({ type: SEARCH_APPLICATION, payload: applications });
  };
};