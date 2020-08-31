import { combineReducers } from "redux";
import { searchImage } from "./searchImage";

const reducers = combineReducers({
  news: searchImage,
});

export default reducers;
