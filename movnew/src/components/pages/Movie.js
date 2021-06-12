import React, { Component } from "react";
import MovieList from "./MovieList";
import { Link } from "react-router-dom";
import "../../index.css";
import "../../App.css";

class Movie extends Component {
  constructor() {
    super();
  }

  mapMovieList() {
    const list = this.props.movie.movieList.map((movieList, index) => (
      <MovieList key={movieList.mId} movieList={movieList}></MovieList>
    ));
    return list;
  }

  render() {
    return (
      <div className="col-sm-2 px-1 py-1">
      <Link to="/MovieDetails" style={{ textDecoration: "none" }}>
           
         
        <div className="card" id="imgCards" style={{height:"24rem"}}>
        <img
              src={this.props.movie.mvImage}
              className="my-image"
              alt="..."
              style={{ width: "150 px" }}
            />
          
          <div className="card-body bg-dark text-white">
            <h5 className="card-title">{this.props.movie.mvName}</h5>
            <p className="card-text">{this.props.movie.mvLanguage}</p>
            
          </div>
        </div>
        </Link>
        <div className="d-grid gap-2">
        <button
              className="btn btn-info btn-sm"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={"#collapseExample" + this.props.movie.mvId}
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              View More
            </button>
            </div>
        <div
          className="collapse mt-2"
          id={"collapseExample" + this.props.movie.mvId}
        >
          <div className="card card-body p-0 ">
            <ul className="list-group ">{this.mapMovieList()}</ul>
          </div>
        </div>
      </div>
      
    );
  }
}

export default Movie;
