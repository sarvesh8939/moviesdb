import React, { useEffect, useRef } from "react";
import "../components/moviespage.css";
import search_icon from "../assets/search_icon.png";
import Card from "./Card";

function createMovieCard(movie) {
  // console.log(movie["#IMDB_ID"]);
  return (
    <Card
      link={movie["#IMDB_URL"]}
      title={movie["#TITLE"]}
      key={movie["#IMDB_ID"]}
      id={movie["#IMDB_ID"]}
      thumb={movie["#IMG_POSTER"]}
      actors={movie["#ACTORS"]} 
    />
  );
}

function Moviespage({ moviedata, setMoviedata }) {
  const inputref = useRef();

  async function searchMovie(movieName) {
    const url = `https://imdb.iamidiotareyoutoo.com/search?q=${movieName}`;
    const response = await fetch(url);
    const data = await response.json();
    setMoviedata(data.description);
  }
  // console.log(moviedata);

  useEffect(() => {
    if (!moviedata) {
      searchMovie("avengers");
    }
  }, []);

  return (
    <div className="movies">
      <div className="search-bar" id="search-bar">
        <h2>MoviesDB</h2>
        <div className="right">
          <input
            ref={inputref}
            type="text"
            placeholder="Search for a movie..."
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                searchMovie(inputref.current.value);
              }
            }}
          />
          <img
            src={search_icon}
            alt="search"
            onClick={() => searchMovie(inputref.current.value)}
          />
        </div>
      </div>
      <div className="movie-list">
        {moviedata ? (
          moviedata.map(createMovieCard)
        ) : (
          <div className="loading">
            <h2>Loading...</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default Moviespage;
