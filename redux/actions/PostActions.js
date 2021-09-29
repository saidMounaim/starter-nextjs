import * as actions from "../constants/PostConstants";
import absoluteUrl from "next-absolute-url";
import axios from "axios";

export const fetchPosts = (req) => async (dispatch) => {
  try {
    dispatch({ type: actions.FETCH_POSTS_REQUEST });
    const { origin } = absoluteUrl(req);
    const { data } = await axios.get(`${origin}/api/posts`);
    dispatch({ type: actions.FETCH_POSTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actions.FETCH_POSTS_FAILED, payload: error.message });
  }
};
