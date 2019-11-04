import { SINGLE_MOVIE } from "../types";

const singleMovieReducer = (state = {}, action) => {
  if (action.type === SINGLE_MOVIE) {
    return action.payload;
  }
  return state;
};

export default singleMovieReducer;
