// login_router.js

const express = require("express");
const router = express.Router();
const { loginUser } = require("../controller/login_controller");

router.post("/login", loginUser);

module.exports = router;
