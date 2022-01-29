const db = require("../db/db");
class movieDao {
  async addMovie(imdb_id, moviename, rating, feedback) {
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
}
module.exports = new movieDao();
