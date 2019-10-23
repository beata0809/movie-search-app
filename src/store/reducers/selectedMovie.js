import { SELECTED_MOVIE } from "../types";

const initialState = {
  title: "",
  year: "",
  plot: ""
};
const selectedMovieReducer = (state = initialState, action) => {
  if (action.type === SELECTED_MOVIE) {
    state = action.payload;
  }
  return state;
};

export default selectedMovieReducer;
