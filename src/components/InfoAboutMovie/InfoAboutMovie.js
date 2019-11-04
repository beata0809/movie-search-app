import React from "react";
import "./InfoAboutMovie.css";
import { connect } from "react-redux";
import { Modal } from "react-bootstrap";
import { singleMovie } from "./../../store/actions/index";
import { Button } from "reactstrap";
import MovieModal from "../MovieModal/MovieModal";

class InfoAboutMovie extends React.Component {
  state = { show: false };

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
  onClick = ( movie) => {
     this.props.singleMovie(movie);
    this.setState({
      show: true
    });
  };

  render() {
    const { movie } = this.props;

    return (
      <>
        <div className="singleMoviePart">
          <div className="singleMovieTitle">
            <h2> {`${movie.Title}`}</h2>
          </div>
          <Button color="primary" onClick={() => this.onClick(movie.Title)}>
            more
          </Button>
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

const mapStateToProps = state => {
  
  return { singleMovie: state.singleMovie };
};


export default connect(
  mapStateToProps,
  { singleMovie }
)(InfoAboutMovie);
