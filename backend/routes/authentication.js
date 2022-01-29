const express = require("express");
const router = express.Router();

const { loginUser, logoutUser, refreshToken } = require("../controllers/user");
const { checkNotAuth } = require("../middlewares/checkAuth");

router.post("/login", checkNotAuth, loginUser);
router.post("/refresh", refreshToken);
router.get("/logout", logoutUser);
module.exports = router;
