import * as actions from "../constants/PostConstants";

export const fetchPostsReducers = (state = { posts: [] }, action) => {
  switch (action.type) {
    case actions.FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actions.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };
    case actions.FETCH_POSTS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
