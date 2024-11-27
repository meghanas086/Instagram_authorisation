// login_controller.js

const bcrypt = require("bcrypt");
const userModel = require("../model/user_model");
const { STATUS_CODES, MESSAGES } = require("../constants.js");

const loginUser = async (req, res) => {
  const { username, password, email, phonenumber } = req.body;

  if ((!username && !email && !phonenumber) || !password) {
    return res
      .status(STATUS_CODES.BAD_REQUEST)
      .json({ message: MESSAGES.MISSING_FIELDS });
  }

  try {
    let loginUser;

    if (username) {
      loginUser = await userModel.findOne({ username });
    } else if (email) {
      loginUser = await userModel.findOne({ email });
    } else if (phonenumber) {
      loginUser = await userModel.findOne({ phonenumber });
    }

    if (!loginUser) {
      return res
        .status(STATUS_CODES.BAD_REQUEST)
        .json({ message: MESSAGES.INVALID_CREDENTIALS });
    }

    const isMatch = await bcrypt.compare(password, loginUser.password);

    if (isMatch) {
      return res.status(STATUS_CODES.SUCCESS).json({
        message: MESSAGES.LOGIN_SUCCESS,
      });
    } else {
      return res
        .status(STATUS_CODES.BAD_REQUEST)
        .json({ message: MESSAGES.INVALID_CREDENTIALS });
    }
  } catch (error) {
    console.error("Error during login:", error);
    return res
      .status(STATUS_CODES.INTERNAL_SERVER_ERROR)
      .json({ message: MESSAGES.INTERNAL_SERVER_ERROR, error: error.message });
  }
};

module.exports = { loginUser };
