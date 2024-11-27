const MESSAGES = {
  FETCH_ERROR: "Error fetching the posts",
  CREATE_ERROR: "Error creating post",
  POST_NOT_FOUND: "Post not found",
  ERROR_LIKING: "Error liking the post",
  SHARE_ERROR: "Error sharing the post",
  MISSING_FIELDS: "Missing required fields.",
  INVALID_CREDENTIALS: "Invalid input credentials.",
  LOGIN_SUCCESS: "Login successful",
  INTERNAL_SERVER_ERROR: "Internal server error.",
  USER_EXISTS: "User with these details already exists.",
  USER_CREATED: "User with username ({username}) created successfully",
  ERROR_CREATING_USER: "Error creating user",
  UNAUTHORIZED_ACCESS: "Unauthorized access",
};

const PORTS = {
  SERVER: 5000,
};

const STATUS_CODES = {
  SUCCESS: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};

const API_URLS = {
  LOGIN: "/login",
  SIGNUP: "/signup",
  GUEST: "/guest",
};

const URLS = {
  BASE_URL: "http://localhost:5000",
  MONGODB_URL: "mongodb://localhost:27017/Instagram_clone_db",
};

module.exports = { STATUS_CODES, API_URLS, MESSAGES, PORTS, URLS };
