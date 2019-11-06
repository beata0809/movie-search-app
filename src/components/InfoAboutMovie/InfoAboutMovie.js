import React from "react";
import "./InfoAboutMovie.css";
import { connect } from "react-redux";
import { Modal } from "react-bootstrap";
import { getSingleMovie } from "./../../store/actions/index";
import { Button } from "reactstrap";
import MovieModal from "../MovieModal/MovieModal";
import poster from "./../../photo/download.png";

class InfoAboutMovie extends React.Component {
  constructor(props) {
    super(props);
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
  onClick = (title, id, year) => {
    const { getSingleMovie } = this.props;
    getSingleMovie(title, id, year);
    this.setState({
      show: true
    });
  };

  render() {
    const { movie } = this.props;
    const { show } = this.state;
    return (
      <>
        <div className="singleMoviePart">
          <div className="posterPart">
            <img
              alt={"poster"}
              className="movieListPoster"
              src={movie.Poster !== "N/A" ? `${movie.Poster}` : `${poster}`}
            />
          </div>
          <div className="singleMovieTitle">
            <div className="details">
              <h2> {`${movie.Title}`}</h2>
              <h6>Type:{`${movie.Type}`}</h6>
              <h6>Year:{`${movie.Year}`}</h6>
            </div>
            <Button
              className="seeMoreButton"
              color="success"
              onClick={() =>
                this.onClick(movie.Title, movie.imdbID, movie.Year)
              }
            >
              See more
            </Button>
          </div>
        </div>
        <Modal show={show} onHide={this.handleClose}>
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
