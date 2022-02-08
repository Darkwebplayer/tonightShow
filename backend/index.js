const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
require("dotenv").config();
const Dao = require("./dao/movie");
const cors = require("cors");

const corsOptions = {
  origin: process.env.CLIENT_ADDRESS,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const authRoute = require("./routes/authentication");
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(userRoute);
app.use(movieRoute);
app.use(authRoute);
app.get("/", (req, res) => {
  res.send("hi");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("server running ");
});
