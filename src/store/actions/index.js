import axios from "axios";
import { SELECTED_MOVIES, SINGLE_MOVIE } from "../types";

export const getSelectedMovies = (title, page) => async dispatch => {
  try {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=c268494&s=${title}&page=${page}`
    );
    dispatch({
      type: SELECTED_MOVIES,
      payload: data
    });
  } catch (ex) {
    console.log(ex);
  }
};

export const getSingleMovie = (title, id, year) => async dispatch => {
  try {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?i=${id}&apikey=c268494&t=${title}&y=${year}`
    );
    dispatch({
      type: SINGLE_MOVIE,
      payload: data
    });
  } catch (ex) {
    console.log(ex);
  }
};
