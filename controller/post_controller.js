// post_controller.js

const Post = require("../model/post_model");
const { MESSAGES, STATUS_CODES } = require("../constants");

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res
      .status(STATUS_CODES.INTERNAL_SERVER_ERROR)
      .json({ message: MESSAGES.FETCH_ERROR });
  }
};

const createPost = async (req, res) => {
  const { content, hashtags, username, email } = req.body;

  try {
    const newPost = new Post({
      user: { username, email },
      content,
      hashtags,
    });

    await newPost.save();
    res.json(newPost);
  } catch (err) {
    res
      .status(STATUS_CODES.INTERNAL_SERVER_ERROR)
      .json({ message: MESSAGES.CREATE_ERROR });
  }
};

module.exports = { getAllPosts, createPost };
