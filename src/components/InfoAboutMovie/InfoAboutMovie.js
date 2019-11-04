
import React from "react";
import "./InfoAboutMovie.css";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import {  Modal } from "react-bootstrap";
import { singleMovie } from "./../../store/actions/index";
import { Button } from "reactstrap";
import MovieModal from "../MovieModal/MovieModal";

class InfoAboutMovie extends React.Component {
  state = { show: false };

  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  handleShow = () => {
    this.setState({
      show:true,
    });
  };
  onSubmit = formValues => {
    this.props.singleMovie(formValues.movie);
    this.setState({
      show:true,
    });
  };

  render() {
    const { movie } = this.props;

    const { handleSubmit } = this.props;
    return (
      <>
            <div className="singleMoviePart">
              <div className="singleMovieTitle">
                <h2> {`${movie.Title}`}</h2>
              </div>
              <form className="form" onSubmit={handleSubmit(this.onSubmit)}>
                <Button color="primary" >
                more
              </Button>
            </form>
            </div>
            <Modal
              show={this.state.show}
              onHide={this.handleClose}
              footer={[
                <Button variant="secondary" onClick={this.handleClose}>
                  Close
                </Button>
              ]}
            >
              <MovieModal title={singleMovie.Title} year={singleMovie.Year}/>
              {console.log("propsy") }
              {console.log(this.props.movie.Released)
              /* <MovieModal title={singleMovie.Title} year={singleMovie.Year} /> */}
              {/* { <Modal.Header closeButton>
                <Modal.Title> {`${movie.Title}`}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {" "}
                <div> type: {`${movie.Type}`}</div>
                <div>year: {`${movie.Year}`}</div>
                <img src={`${movie.Poster}`} style={{width:'12rem'},{height:'20rem'}}/>
              </Modal.Body>
              <Modal.Footer>
      
              </Modal.Footer> } */}
            </Modal>
          </>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.singleMovie);
  return { singleMovie: state.singleMovie };
};

const SearchForm = reduxForm({
  form: "search-film-form"
})(InfoAboutMovie);

export default connect(
  mapStateToProps,
  { singleMovie }
)(SearchForm);
