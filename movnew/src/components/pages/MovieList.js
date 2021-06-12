import React, { Component } from "react";

export class MovieList extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <span>{this.props.movieList.mName}</span>
        <span>{this.props.movieList.mName1}</span>
      </li>
    );
  }
}

export default MovieList;