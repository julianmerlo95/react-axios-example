import React from "react";
import { loadImageHandler } from "../../axios/index";
import { useDispatch } from "react-redux";
import { searchImage } from "../../redux/action/index";
import "./searchNews.sass";

export const SearchNews = () => {
  const dispatch = useDispatch();
  let search;

  const changeHandler = async (e) => {
    search = e.target.value;
    return search;
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const response = await loadImageHandler(
      `${process.env.REACT_APP_URL_SEARCH_IMAGE}?q=${search}`,
      `&api-key=${process.env.REACT_APP_API_KEY}`
    );
    dispatch(searchImage(response.response.docs));
    return;
  };

  return (
    <form onSubmit={(e) => submitHandler(e)} className="search">
      <input
        type="text"
        name="news"
        placeholder="Search here..."
        required
        onChange={(e) => changeHandler(e)}
      />
      <div>
        <button>Search</button>
      </div>
    </form>
  );
};
