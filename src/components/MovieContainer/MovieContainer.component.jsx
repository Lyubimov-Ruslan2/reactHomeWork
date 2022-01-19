import react from "react";
import Movie from "../movie/movie.component";

let movies = [
  {
    title: "Pulp Fiction",
    img: "./img/pulpfiction.png",
    year: 2004,
    genre: "Action & Adventure",
  },
  {
    title: "Bohemian Rhapsody",
    img: "./img/Bogem.png",
    year: 2003,
    genre: "Drama, Biography, Music",
  },
  {
    title: "Kill Bill: Vol 2",
    img: "./img/killbill.png",
    year: 1994,
    genre: "Oscar winning Movie",
  },
  {
    title: "Avengers: War of Infinity",
    img: "./img/Avengers.png",
    year: 2004,
    genre: "Action & Adventure",
  },
  {
    title: "Inception",
    img: "./img/Inception.png",
    year: 2003,
    genre: "Action & Adventure",
  },
  {
    title: "Reservoir dogs",
    img: "./img/Dogs.png",
    year: 1994,
    genre: "Oscar winning Movie",
  },
];

const MovieContainer = () => {
  return (
    <div className="movie-list">
      <img src={`./img/Avengers.png`} />
    </div>
  );
};

export default MovieContainer;
