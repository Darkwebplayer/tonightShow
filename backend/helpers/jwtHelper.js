const jwt = require("jsonwebtoken");

class jwtHelper {
  async createUserToken(user) {
    return jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "15m",
    });
  }
  async createRefreshToken(user) {
    return jwt.sign({ user }, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: "7d",
    });
  }
  async verifyUserToken(token) {
    return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  }
  async verifyRefreshToken(token) {
    return jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
  }
}

module.exports = new jwtHelper();
