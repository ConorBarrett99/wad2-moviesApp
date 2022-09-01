import React from "react";
import FilterMovieCard from "../components/filterMovieCard";

export default {
  title: "Home Page/FilterMoviesCard",
  component: FilterMovieCard,
};

export const Basic = () => {
  return <FilterMovieCard />;
};
Basic.storyName = "Default";