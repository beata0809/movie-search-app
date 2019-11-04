import React from "react";
import { Modal } from "react-bootstrap";

import { object } from "prop-types";
import { connect } from "react-redux";
class MovieModal extends React.Component{
    render(){
        return(
            <div>
               { `${this.props.title}`}
            </div>
        );
    }
}
//     return(
//  <>
//  <Modal.Header closeButton>
//     <Modal.Title> {`${movie.Title}`}</Modal.Title>
//   </Modal.Header>
//   <Modal.Body>
//     {" "}
//     <div> type: {`${movie.Type}`}</div>
//     <div>year: {`${movie.Year}`}</div>
//     <img src={`${movie.Poster}`} style={{width:'12rem'},{height:'20rem'}}/>
//   </Modal.Body>
//   </>
//    );


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
