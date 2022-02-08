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
    const res = await db.from("movies").select().where({ id: id });
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
  // WITH v1 AS (SELECT * FROM test WHERE id NOT IN (1,2,3)) SELECT * FROM v1 OFFSET floor(random()*16) LIMIT 1;
  async getRandom(count, watchlist = []) {
    try {
      let query = "";
      if (watchlist.length < 1) {
        query = `SELECT tmdb_id FROM movies OFFSET floor(random()*${count}) LIMIT 1;`;
      } else {
        query = `WITH v1 AS (SELECT * FROM movies WHERE id NOT IN (${watchlist})) SELECT tmdb_id FROM v1 OFFSET floor(random()*${count}) LIMIT 1;`;
      }
      let res = { rows: [] };
      while (res.rows.length < 1) {
        res = await db.raw(query);
      }

      return res;
    } catch (err) {
      console.log(err);
    }
  }
}
module.exports = new movieDao();
