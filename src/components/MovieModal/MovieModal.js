import React from "react";
import { Modal } from "react-bootstrap";
import "./MovieModal.css";
import { object } from "prop-types";
import { connect } from "react-redux";
import poster from "./../../photo/download.png";

class MovieModal extends React.Component {
  render() {
    const { singleMovie } = this.props;
    return (
      <>
        {singleMovie && singleMovie.Response === "True" ? (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{singleMovie.Title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="modalInfo">
                <img
                  className="modalPoster"
                  src={
                    singleMovie.Poster != "N/A"
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
