import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import getSelectedMoviesReducer from "./reducers/getSelectedMovies";
import getSingleMovieReducer from "./reducers/getSingleMovie";

const rootReducer = combineReducers({
  form: formReducer,
  searchMovie: getSelectedMoviesReducer,
  singleMovie: getSingleMovieReducer
});

export default rootReducer;
