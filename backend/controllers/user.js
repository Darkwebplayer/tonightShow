const jwtHelper = require("../helpers/jwtHelper");
const userService = require("../services/user");

class userController {
  async addUser(req, res) {
    try {
      const id = await userService.createUser(req.body);
      return res.status(201).json(id);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: err });
    }
  }
  async getUser(req, res) {
    try {
      const qres = await userService.getUser(req.params.id);
      res.status(200).json(qres);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: err });
    }
  }
  async loginUser(req, res) {
    const loginDto = req.body;
    if (!loginDto.user) {
      return res.status(400).json({ error: "Invalid Username" });
    }
    if (!loginDto.password) {
      return res.status(400).json({ error: "password invalid" });
    }
    try {
      let qres = await userService.authenticate(loginDto);
      if (qres.error) {
        return res.status(400).json({ error: qres.error });
      }
      let { user } = qres;

      let accessToken = await jwtHelper.createUserToken(user);
      let refreshToken = await jwtHelper.createRefreshToken(user);
      let rft = await userService.addToken(refreshToken);
      res.cookie("rft", rft, { httpOnly: true });
      return res.status(200).json({ accessToken: accessToken });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: err });
    }
  }
  async logoutUser(req, res) {
    try {
      let { rft } = req.cookies;

      userService.deleteToken(rft);
      res.cookie("rft", "", { httpOnly: true });
      return res.redirect("/");
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: err });
    }
  }
  async refreshToken(req, res) {
    let { rft } = req.cookies;

    if (rft !== "") {
      let { valid } = await userService.refreshToken(rft);

      if (!valid) {
        res.cookie("rft", "", { httpOnly: true });
        return res.status(400).json({ error: "invalid token" });
      }
      let { user } = await jwtHelper.verifyRefreshToken(rft);
      if (!user) {
        res.cookie("rft", "", { httpOnly: true });
        return res.status(400).json({ error: "invalid token" });
      } else {
        try {
          const accessToken = await jwtHelper.createUserToken(user);
          res.setHeader("Authorization", `Bearer ${accessToken}`);
          res.status(200).json({ message: "success" });
        } catch (err) {
          console.error(err);
          return res.status(500).json({ error: err });
        }
      }
    } else {
      return res.status(400).json({ error: "invalid token" });
    }
  }
}
module.exports = new userController();
