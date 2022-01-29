const express = require("express");
const app = express();

const cors = require("cors");
const corsOptions = {
  // origin: ["http://localhost:3000", "https://192.168.1.7:3000"],
  origin: ["*"],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const cookieParser = require("cookie-parser");
require("dotenv").config();
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

app.listen(8080, () => {
  console.log("server running on port 8080");
});
