import React, { useState, useEffect } from "react";
import { fetchData } from "./api";
import { filterAllMoviesByGenre } from "./util";
// import { extractText } from "./util";
import "./Home.scss";
import { useHistory } from "react-router-dom";
export interface IModalHome {
  movieId: Function;
}
const Home: React.FC<IModalHome> = ({ movieId }: IModalHome) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData().then((response) => setData(response));
  }, []);
  const history = useHistory();
  const allFilteredMovies = filterAllMoviesByGenre(data);
  console.log(allFilteredMovies);

  const handleViewDetail = (val: number) => {
    movieId(val);
    history.push("/movie-detail");
  };
  return (
    <div className="row">
      <h2>Science-Fiction</h2>
      <div className="rowPosters" style={{ display: "flex", gap: "20px" }}>
        {allFilteredMovies.sciFi.map((movie) => (
          <img
            className="movieImg"
            onClick={() => handleViewDetail(movie.id)}
            key={movie.id}
            style={{ height: "auto", cursor: "pointer" }}
            src={movie.image}
            alt="sci-fi"
          />
        ))}
      </div>
      <h2>Drama</h2>
      <div className="rowPosters" style={{ display: "flex", gap: "20px" }}>
        {allFilteredMovies.drama.map((movie) => (
          <img
            onClick={() => handleViewDetail(movie.id)}
            className="movieImg"
            key={movie.id}
            style={{ height: "auto" }}
            src={movie.image}
            alt="sci-fi"
          />
        ))}
      </div>
      <h2>Thriller</h2>
      <div className="rowPosters" style={{ display: "flex", gap: "20px" }}>
        {allFilteredMovies.thriller.map((movie) => (
          <img
            onClick={() => handleViewDetail(movie.id)}
            className="movieImg"
            key={movie.id}
            style={{ height: "auto" }}
            src={movie.image}
            alt="sci-fi"
          />
        ))}
      </div>
      <h2>Crime</h2>
      <div className="rowPosters" style={{ display: "flex", gap: "20px" }}>
        {allFilteredMovies.crime.map((movie) => (
          <img
            onClick={() => handleViewDetail(movie.id)}
            className="movieImg"
            key={movie.id}
            style={{ height: "auto" }}
            src={movie.image}
            alt="sci-fi"
          />
        ))}
      </div>
      <h2>Mystery</h2>
      <div className="rowPosters" style={{ display: "flex", gap: "20px" }}>
        {allFilteredMovies.mystery.map((movie) => (
          <img
            onClick={() => handleViewDetail(movie.id)}
            className="movieImg"
            key={movie.id}
            style={{ height: "auto" }}
            src={movie.image}
            alt="sci-fi"
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
