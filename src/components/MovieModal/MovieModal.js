import React from "react";
import { Modal, Spinner } from "react-bootstrap";
import "./MovieModal.css";
import { object } from "prop-types";
import { connect } from "react-redux";
import poster from "./../../photo/download.png";

class MovieModal extends React.Component {
  constructor() {
    super();
    this.state = { movieExist: false };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ movieExist: true });
    }, 1000);
  }

  render() {
    const { singleMovie } = this.props;
    return (
      <>
        {this.state.movieExist === true ? (
          singleMovie && singleMovie.Response === "True" ? (
            <>
              <Modal.Header closeButton>
                <Modal.Title>{singleMovie.Title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="modalInfo">
                  <img
                    className="modalPoster"
                    alt={"poster"}
                    src={
                      singleMovie.Poster !== "N/A"
                        ? `${singleMovie.Poster}`
                        : `${poster}`
                    }
                  />
                  <div className="moreAboutMovie">
                    <p>
                      <strong>Released:</strong>
                      {singleMovie.Released}
                    </p>
                    <p>
                      <strong>Type:</strong> {singleMovie.Type}
                    </p>
                    <p>
                      <strong>Plot: </strong>
                      {singleMovie.Plot}
                    </p>
                    <p>
                      <strong>Genre:</strong> {singleMovie.Genre}
                    </p>
                  </div>
                </div>
              </Modal.Body>
            </>
          ) : (
            <>
              <Modal.Header closeButton>
                <Modal.Title>Info about movie</Modal.Title>
              </Modal.Header>
              <Modal.Body>No more info provided.</Modal.Body>
            </>
          )
        ) : (
          <>
            <Modal.Header closeButton>
              <Modal.Title>Loading movie</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Spinner animation="border" role="status" className="loader">
                <span className="sr-only">Loading...</span>
              </Spinner>
            </Modal.Body>
          </>
        )}
      </>
    );
  }
}

MovieModal.propTypes = {
  singleMovie: object
};

const mapStateToProps = state => {
  return { singleMovie: state.singleMovie };
};

export default connect(
  mapStateToProps,
  null
)(MovieModal);
