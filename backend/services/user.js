const userDao = require("../dao/user");
class userService {
  createUser(userDto) {
    const { username, email, password } = userDto;
    return userDao.createUser(username, email, password);
  }
  getUser(id) {
    return userDao.getUser(id);
  }
  authenticate(loginDto) {
    const { user, password } = loginDto;
    return userDao.authUser(user, password);
  }
  refreshToken(token) {
    return userDao.checkToken(token);
  }
  addToken(token) {
    return userDao.addToken(token);
  }
  deleteToken(token) {
    return userDao.deleteToken(token);
  }
}
module.exports = new userService();
