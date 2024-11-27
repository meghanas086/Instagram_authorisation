const express = require("express");
const router = express.Router();
const { sharePost } = require("../controller/share_controller");
const authMiddleware = require("../middleware/auth_middleware");

router.post("/:username/:postId/share", authMiddleware, sharePost);

module.exports = router;
