import { LOAD_ONE_PROGRAM } from "../../redux/actions/type";

const program = (state = { data:[]}, action) => {
  switch (action.type) {
    case LOAD_ONE_PROGRAM:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default program;
