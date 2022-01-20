import react from "react";
import "./movie.styles.css";

const Movie = (props) => {
  return (
    <div className="movie-about">
      <img src={props.movie.img} />
      <div className="about">
        <p>{props.movie.title}</p>
        <button className="btn-about">{props.movie.year}</button>
      </div>
      <p className="genre-about">{props.movie.genre}</p>
    </div>
  );
};

export default Movie;
