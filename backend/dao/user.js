const db = require("../db/db");
class userDao {
  async createUser(username, email, password) {
    const [id] = await db("users")
      .insert({
        username,
        email,
        password,
      })
      .returning("id");
    return id;
  }
  async getUser(id) {
    const res = await db.from("users").select().where({ id: id });

    return res;
  }
  async authUser(user, password) {
    const userAuthQ = await db
      .from("users")
      .select()
      .where({ username: user, password });

    if (userAuthQ.length < 1) {
      const emailAuthQ = await db
        .from("users")
        .select()
        .where({ email: user, password });
      if (emailAuthQ.length < 1) {
        return { error: "invalid login" };
      }
      return { user: emailAuthQ[0].email };
    }
    return { user: userAuthQ[0].email };
  }
  async checkToken(token) {
    const refreshToken = await db.from("rft").select().where({ token: token });
    if (refreshToken.length < 1) {
      return { valid: false };
    } else {
      return { valid: true };
    }
  }
  async addToken(rft) {
    const [res] = await db("rft").insert({ token: rft }).returning("token");

    return res.token;
  }
  async deleteToken(rft) {
    const res = await db("rft").delete("rft").where({ token: rft });
    return { message: "loggedout successfully" };
  }
}
module.exports = new userDao();
