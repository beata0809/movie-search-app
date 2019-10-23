import React from "react";
import SearchPanel from "./../SearchPanel/SearchPanel";
import SingleMovie from "./../SingleMovie/SingleMovie";
import { connect } from "react-redux";
import { object } from "prop-types";

const MovieListPanel = ({ searchMovie }) => {
  return (
    <>
      <SearchPanel />
      <div>
        {searchMovie &&
          searchMovie.Search.map(movie => <SingleMovie movie={movie} />)}
      </div>
    </>
  );
};

MovieListPanel.propTypes = {
  searchMovie: object 
};

const mapStateToProps = state => {
  return { searchMovie: state.searchMovie };
};

export default connect(
  mapStateToProps,
  null
)(MovieListPanel);
