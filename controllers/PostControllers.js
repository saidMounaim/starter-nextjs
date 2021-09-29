import Post from "../models/Post";
import asyncHandler from "../middlewares/asyncHandler";

import ErrorHandler from "../middlewares/ErrorHandler";

//@DESC Get All Posts
//@ROUTE /api/posts
//@METHOD GET
export const allPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({});

  res.status(201).json({ success: true, count: posts.length, data: posts });
});

//@DESC Get Single Post
//@ROUTE /api/posts/:id
//@METHOD GET
export const singlePost = asyncHandler(async (req, res, next) => {
  const post = await Post.findById(req.query.id);

  if (!post) {
    return next(new ErrorHandler("Post Not Found", 404));
  }

  res.status(201).json({ success: true, data: post });
});
