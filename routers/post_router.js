const express = require("express");
const router = express.Router();
const { getAllPosts, createPost } = require("../controller/post_controller");
const authMiddleware = require("../middleware/auth_middleware");
 
router.get("/posts", getAllPosts);
router.post("/:username/posts", authMiddleware, createPost);
 
module.exports = router;
