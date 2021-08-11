import { combineReducers } from "redux";
import favoriteReducer from "./favoriteReducer";
import movieReducer from "./movieReducer";

const superReducer = combineReducers({
  movieReducer,
  favoriteReducer,
});

export default superReducer;
