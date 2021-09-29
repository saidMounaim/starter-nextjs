import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
});

const Post = mongoose.models.Post || mongoose.model("Post", PostSchema);

export default Post;
