// signup_controller.js

const bcrypt = require("bcrypt");
const userModel = require("../model/user_model");
const { STATUS_CODES, MESSAGES } = require("../constants");

const signupUser = async (req, res) => {
  const { email, username, password, phonenumber } = req.body;

  try {
    const existingUser = await userModel.findOne({
      $or: [
        { email: email },
        { username: username },
        { phonenumber: phonenumber },
      ],
    });

    if (existingUser) {
      return res
        .status(STATUS_CODES.BAD_REQUEST)
        .send({ message: MESSAGES.USER_EXISTS });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const createdUser = await userModel.create({
      email: email,
      username: username,
      phonenumber: phonenumber,
      password: hashedPassword,
    });

    res.status(STATUS_CODES.CREATED).json({
      message: `User with username ${createdUser.username} created successfully`,
    });
  } catch (error) {
    console.error("Error during signup:", error);
    res
      .status(STATUS_CODES.INTERNAL_SERVER_ERROR)
      .json({ message: MESSAGES.ERROR_CREATING_USER, error: error.message });
  }
};

module.exports = { signupUser };
