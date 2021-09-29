import { combineReducers } from "redux";
import { fetchPostsReducers } from "./reducers/PostReducers";

const rootReducers = combineReducers({
  allPosts: fetchPostsReducers,
});

export default rootReducers;
