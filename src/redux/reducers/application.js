import { LOAD_ALL_APPLICATION } from "../../redux/actions/type";

const application = (state = { data:[]}, action) => {
  switch (action.type) {
    case LOAD_ALL_APPLICATION:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default application;
