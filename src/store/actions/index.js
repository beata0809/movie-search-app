import axios from "axios";
import { SELECTED_MOVIES, SINGLE_MOVIE } from "../types";

export const getSelectedMovies = title => async dispatch => {
  try {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=c268494&s=${title}`
    );
    dispatch({
      type: SELECTED_MOVIES,
      payload: data
    });
  } catch (ex) {
    console.log(ex);
  }
};

export const getSingleMovie = title => async dispatch => {
  try {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=c268494&t=${title}`
    );
    dispatch({
      type: SINGLE_MOVIE,
      payload: data
    });
  } catch (ex) {
    console.log(ex);
  }
};
