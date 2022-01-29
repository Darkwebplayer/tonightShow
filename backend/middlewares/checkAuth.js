const { parseBearer } = require("../helpers");
const { verifyRefreshToken, verifyUserToken } = require("../helpers/jwtHelper");
const { refreshToken } = require("../services/user");

const checkAuth = async (req, res, next) => {
  let authHeader = req.header("Authorization");

  let act = parseBearer(authHeader);

  if (act) {
    let vact = await verifyUserToken(act);
    if (vact.user) {
      return next();
    }
    return res.redirect("/login");
  }
  return res.redirect("/login");
};
const checkNotAuth = async (req, res, next) => {
  let { rft } = req.cookies;
  if (rft) {
    let vRFT = await verifyRefreshToken(rft);
    if (vRFT.user) {
      let valid = await refreshToken(rft);
      if (!valid) {
        return next();
      }
      return res.redirect("/");
    }
  }
  return next();
};
module.exports = { checkAuth, checkNotAuth };
