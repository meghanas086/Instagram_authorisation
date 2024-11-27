// like_controller.js

const Post = require("../model/post_model.js");
const { MESSAGES, STATUS_CODES } = require("../constants.js");

const likePost = async (req, res) => {
  let { postId } = req.params;
  if (!postId) {
    return res
      .status(STATUS_CODES.FORBIDDEN)
      .json({ message: MESSAGES.UNAUTHORIZED });
  }
  try {
    postId = postId.replace(/^:*/, "");
    const post = await Post.findById(postId);
    if (!post) {
      return res
        .status(STATUS_CODES.NOT_FOUND)
        .json({ message: MESSAGES.POST_NOT_FOUND });
    }

    const { email, username } = req.body;

    const alreadyLiked = post.likes.some((like) => like.email === email);
    if (alreadyLiked) {
      return res.json(post);
    }
    console.log("Before updating:", post.likes);
    post.likes.push({ username, email });
    console.log("After adding like:", post.likes);
    await post.save();

    res.json(post);
  } catch (err) {
    console.error("Error liking the post:", err);
    res
      .status(STATUS_CODES.INTERNAL_SERVER_ERROR)
      .json({ message: MESSAGES.ERROR_LIKING });
  }
};

module.exports = { likePost };
