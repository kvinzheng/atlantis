import axios from "../../axios/axios";

import { LOAD_ALL_PROGRAMS, SEARCH_PROGRAM } from "./type";

export const fetchPrograms = () => {
  return async (dispatch) => {
    const response = await axios.get("./programs?page_size=10");
    const programs = response.data.data.targets;
    dispatch({ type: LOAD_ALL_PROGRAMS, payload: programs });
  };
};

export const searchProgram = (name) => {
  return async (dispatch) => {
    const response = await axios.get(`./programs?company_name=${name}&page_num=10`);
    const programs = response.data.data.targets;
    console.log('searchProgram',programs);
    dispatch({ type: SEARCH_PROGRAM, payload: programs });
  };
};