import React, { useState } from "react";
import { Link } from "react-router-dom";

import fallback_img from "../assets/fallback_img.png";

function Card(props) {
  const [imgSrc, setImgSrc] = useState(props.thumb || fallback_img);

  return (
    <div className="movie-card">
      <img
        src={imgSrc}
        onError={() => setImgSrc(fallback_img)}
        alt={`${props.title}-poster`}
      />
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
