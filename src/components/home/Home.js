import React from "react";
import { SearchNews } from "./searchNews/SearchNews";
import { ShowNews } from "./searchNews/showNews/ShowNews";
import { InitialNews } from "./initialNews/InitialNews";
import { useSelector } from "react-redux";

export const Home = () => {
  const validationObject = useSelector((state) => state.news);
  return (
    <div>
      <SearchNews />
      {Object.keys(validationObject).length === 0 ? (
        <InitialNews />
      ) : (
        <ShowNews />
      )}
    </div>
  );
};
