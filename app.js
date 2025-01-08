const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const postRoutes = require("./routers/post_router.js");
const likeRoutes = require("./routers/like_router.js");
const shareRoutes = require("./routers/share_router.js");
const loginRoute = require("./routers/login_router.js");
const signupRoute = require("./routers/signup_router.js");
const { PORTS, URLS } = require("./constants.js");
const PORT = PORTS.SERVER || 5000;

console.log("hello");

const app = express();

const corsOpts = {
  origin: "*",
  methods: ["GET", "POST"],
};

app.use(cors(corsOpts));
app.use(express.json());

app.use("/", loginRoute);
app.use("/", signupRoute);
app.use("/", postRoutes);
app.use("/", likeRoutes);
app.use("/", shareRoutes);

mongoose
  .connect(URLS.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((error) => {
    console.error("Error connecting to Database", error);
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
