const express = require("express");
const router = express.Router();

const { getMovie, addMovie, generateMovie } = require("../controllers/movie");
const { checkAuth } = require("../middlewares/checkAuth");
// const { loginUser, logoutUser } = require("../controllers/User");
router.post("/movies", generateMovie);
router.get("/movies/:id", getMovie);
router.post("/movies/add", checkAuth, addMovie);

// router.get("/logout", logoutUser);
module.exports = router;
