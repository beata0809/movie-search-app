import React from "react";
import { Modal } from "react-bootstrap";
import "./MovieModal.css";
import { object } from "prop-types";
import { connect } from "react-redux";
class MovieModal extends React.Component {
  render() {
   const {singleMovie}=this.props;
    return (
      <>
        <Modal.Header closeButton>
          <Modal.Title>{singleMovie.Title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modalInfo">
          <img src={`${singleMovie.Poster}`} style={{width:'12rem'},{height:'20rem'}}/>
          <div className="moreAboutMovie">
          <p><strong>Released:</strong>{singleMovie.Released}</p>
          <p><strong>Type:</strong> {singleMovie.Type}</p>
          <p><strong>Plot: </strong>{singleMovie.Plot}</p> 
          <p><strong>Genre:</strong> {singleMovie.Genre}</p>
          </div>
          </div>
        </Modal.Body>
      </>
    );
  }
}

MovieModal.propTypes = {
  singleMovie: object
};

const mapStateToProps = state => {
 // console.log(state);
  return { singleMovie: state.singleMovie };
};

export default connect(
  mapStateToProps,
  null
)(MovieModal);
