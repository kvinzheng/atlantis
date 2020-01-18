import { LOAD_ALL_PROGRAMS, SEARCH_PROGRAM } from "../../redux/actions/type";

const programs = (state = { data:[]}, action) => {
  switch (action.type) {
    case LOAD_ALL_PROGRAMS:
      return { ...state, data: action.payload };
    case SEARCH_PROGRAM:

      console.log('programs',{ ...state, data: action.payload })
   
      return {...state, data: action.payload};
    default:
      return state;
  }
};

export default programs;
