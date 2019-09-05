import React from "react";
import MovieList from "../Widgets/MovieList/movieList";
const Home = () => {
  return (
    <div>
      <MovieList start={0} amount={5} />
    </div>
  );
};

export default Home;
