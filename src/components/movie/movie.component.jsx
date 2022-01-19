import react from "react";

const Movie = (props) => {
  return (
    <>
      <img src={`../MovieContainer/${props.img}`} />
    </>
  );
};

export default Movie;
