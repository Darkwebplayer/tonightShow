const db = require("../db/db");
class movieDao {
  async addMovie(imdb_id, moviename, rating, feedback) {
    console.log(imdb_id, moviename, rating);
    const [id] = await db("movies")
      .insert({
        imdb_id: imdb_id,
        name: moviename,
        rating: rating,
        votes: 10,
        feedback: feedback,
      })
      .returning("id");
    return id;
  }
  async getMovie(id) {
    const res = await db.from("movies").select().where({ id: id });
    return res;
  }
  async getCount() {
    const res = await db.from("movies").select().count();

    return res;
  }
  async getAll() {
    try {
      const res = await db.from("movies").select();
      console.log(res);
      return res;
    } catch (err) {
      console.log(err);
    }
  }
}
module.exports = new movieDao();
