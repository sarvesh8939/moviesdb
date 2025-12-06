import React, { useEffect, useState } from "react";
import "../components/details.css";
import { useParams } from "react-router-dom";

function Details() {
  const { imdbid } = useParams();
  const [moviedata, setmoviedata] = useState(null);

  async function fetchMovieDetails(id) {
    const url = `https://imdb.iamidiotareyoutoo.com/search?tt=${id}`;
    const response = await fetch(url);
    const data = await response.json();
    setmoviedata(data);
  }
  
  useEffect(() => {
    fetchMovieDetails(imdbid);
  }, []);

  return (
    <div className="app">
      <div className="content">
        <div className="left">
          <div className="image">
            <img
              src={moviedata ? moviedata.short.image : "No image available"}
              alt="poster"
            />
          </div>

          <h2>{moviedata ? moviedata.short.name : "No name available"}</h2>
        </div>
        <div className="rightdd">
          <div className="description moviedata">
            <h3>Description</h3>
            <p>
              {moviedata
                ? moviedata.short.description || "No description available"
                : "No description available"}
            </p>
          </div>
          <div className="actors moviedata">
            <h3>Directer</h3>
            <p>
              {moviedata
                ? moviedata.top.directorsPageTitle.length > 0
                  ? moviedata.top.directorsPageTitle.map(
                      (d, index) =>
                        d.credits[0].name.nameText.text +
                        (index < moviedata.top.directorsPageTitle.length - 1
                          ? ", "
                          : "") || "No directer available"
                    )
                  : "No directer available"
                : "No description available"}
            </p>
            <h3>Actors</h3>
            <p>
              {moviedata
                ? moviedata.main.castV2[0].credits.map(
                    (n, index) =>
                      n.name.nameText.text +
                      (index < moviedata.main.castV2[0].credits.length - 1 ? ", " : "")
                  ) || "No actors available"
                : "No description available"}
            </p>
          </div>
          <div className="genre moviedata">
            <h3>Release Date</h3>
            <p>
              {moviedata ? moviedata.short.datePublished || "no data available" : "no data available"}
            </p>
            <h3>Genre</h3>
            <p>
              {moviedata
                ? moviedata.short.genre.map(
                    (d, index) =>
                      d + (index < moviedata.short.genre.length - 1 ? ", " : "")
                  ) || "No genre available"
                : "No description available"}
            </p>
            <p>{}</p>
          </div>
          <div className="rating moviedata">
            <h3>Rating</h3>
            <p>
              ⭐
              {moviedata
                ? moviedata.top.ratingsSummary.aggregateRating == null
                  ? "  not released"
                  : moviedata.short.aggregateRating.ratingValue + "/10" || "No rating available"
                : "No data available"}
            </p>
            <p>
              Rating Count:
              {moviedata
                ? moviedata.top.ratingsSummary.voteCount == 0
                  ? " 0"
                  : ` ${moviedata.short.aggregateRating.ratingCount}` || "No rating count found"
                : "No rating count found"}
            </p>
          </div>
        </div>
      </div>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&family=Quantico:ital,wght@0,400;0,700;1,400;1,700&display=swap');
      </style>
    </div>
  );
}

export default Details;
