const mongoose = require("mongoose");

const shareSchema = new mongoose.Schema({
  postId: { type: mongoose.Schema.Types.ObjectId, ref: "Post", required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
});

const Share = mongoose.model("Share", shareSchema);
module.exports = Share;
