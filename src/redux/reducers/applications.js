import { LOAD_ALL_APPLICATIONS, SEARCH_APPLICATION } from "../../redux/actions/type";

const programs = (state = { data:[]}, action) => {
  switch (action.type) {
    case LOAD_ALL_APPLICATIONS:
      return { ...state, data: action.payload };
    case SEARCH_APPLICATION:   
      return {...state, data: action.payload};
    default:
      return state;
  }
};

export default programs;
