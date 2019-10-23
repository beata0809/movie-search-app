import React from "react";

const SingleMovie = ({ movie }) => (
  <div>
    <h2>film: {`${movie.Title}`}</h2>
    <div> type:{`${movie.Type}`}</div>
    <div>year:{`${movie.Year}`}</div>
  </div>
);

export default SingleMovie;
