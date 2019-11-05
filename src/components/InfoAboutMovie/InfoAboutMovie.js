import React from "react";
import "./InfoAboutMovie.css";
import { connect } from "react-redux";
import { Modal } from "react-bootstrap";
import { getSingleMovie } from "./../../store/actions/index";
import { Button } from "reactstrap";
import MovieModal from "../MovieModal/MovieModal";
import poster from "./../../photo/download.png";

class InfoAboutMovie extends React.Component {
  constructor() {
    super();
    this.state = { show: false };
  }

  handleClose = () => {
    this.setState({
      show: false
    });
  };

  handleShow = () => {
    this.setState({
      show: true
    });
  };
  onClick = movie => {
    this.props.getSingleMovie(movie);
    this.setState({
      show: true
    });
  };

  render() {
    const { movie } = this.props;

    return (
      <>
        <div className="singleMoviePart">
          <div className="posterPart">
            <img
              className="movieListPoster"
              src={movie.Poster != "N/A" ? `${movie.Poster}` : `${poster}`}
            />
          </div>
          <div className="singleMovieTitle">
            <h2> {`${movie.Title}`}</h2>
            <h6>Type:{`${movie.Type}`}</h6>
            <h6>Year:{`${movie.Year}`}</h6>
            <Button color="primary" onClick={() => this.onClick(movie.Title)}>
              See more
            </Button>
          </div>
        </div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <MovieModal />
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default connect(
  null,
  { getSingleMovie }
)(InfoAboutMovie);
