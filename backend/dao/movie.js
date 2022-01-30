const db = require("../db/db");
class movieDao {
  async addMovie(tmdb_id, moviename, rating, feedback) {
    console.log(tmdb_id, moviename, rating);
    const [id] = await db("movies")
      .insert({
        tmdb_id: tmdb_id,
        name: moviename,
        rating: rating,
        votes: 10,
        feedback: feedback,
      })
      .returning("id");
    return id;
  }
  async getMovie(id) {
    const res = await db
      .from("movies")
      .select()
      .where({ id: id })
      .returning("tmdb_id");
    console.log(res);
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
