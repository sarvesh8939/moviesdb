import React, { useState } from "react";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div className="movie-card">
      <img src={props.thumb} alt={`${props.title}-poster`} />
      <div className="movie-info">
        <Link to={`/movie/${props.id}`} className="link1">
          <p className="more-info">More Info</p>
        </Link>
        <h5>{props.title}</h5>
        <p>{props.actors}</p>
      </div>
    </div>
  );
}

export default Card;
