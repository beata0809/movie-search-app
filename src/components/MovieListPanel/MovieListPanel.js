import React, { useState } from "react";
import SearchPanel from "./../SearchPanel/SearchPanel";
import InfoAboutMovie from "../InfoAboutMovie/InfoAboutMovie";
import { connect } from "react-redux";
import { object } from "prop-types";
import {
  ListGroupItem,
} from "reactstrap";
import "./MovieListPanel.css";


const MovieListPanel = ({ searchMovie }) => {
  if(searchMovie == null)
  {
    return( <SearchPanel />);
  }
  return (
    <>
     <SearchPanel />
     { searchMovie && searchMovie.Response=="True"?
       <div>
        {searchMovie &&
          searchMovie.Search.map(movie => (
            <ListGroupItem key={movie.imdbID} className="movieList">
              <InfoAboutMovie movie={movie} className="searchPanelStyle"/>
            </ListGroupItem>
          ))}
      </div>
       :
       <div className="notFound"> <ListGroupItem >movie not found</ListGroupItem> </div>
     }
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
