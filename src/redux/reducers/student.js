import { LOAD_ONE_STUDENT } from "../../redux/actions/type";

const students = (state = { data:[]}, action) => {
  switch (action.type) {
    case LOAD_ONE_STUDENT:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default students;
