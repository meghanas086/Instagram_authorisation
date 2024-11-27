// signup_router.js

const express = require("express");
const router = express.Router();
const { signupUser } = require("../controller/signup_controller");

router.post("/signup", signupUser);

module.exports = router;
