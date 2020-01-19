import { LOAD_ALL_STUDENTS, SEARCH_STUDENT } from "../../redux/actions/type";

const students = (state = { data:[]}, action) => {
  switch (action.type) {
    case LOAD_ALL_STUDENTS:
      return { ...state, data: action.payload };
    case SEARCH_STUDENT:   
      return {...state, data: action.payload};
    default:
      return state;
  }
};

export default students;
