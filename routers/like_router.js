const express = require("express");
const router = express.Router();
const { likePost } = require("../controller/like_controller");
const authMiddleware = require("../middleware/auth_middleware");

router.post("/:username/:postId/like", authMiddleware, likePost);

module.exports = router;
