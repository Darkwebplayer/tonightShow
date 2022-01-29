const imdb = require("imdb-api");
class imdbHelper {
  async getMovie(imdb_id) {
    try {
      return await imdb.get(
        { id: imdb_id },
        { apiKey: process.env.IMDB_API_KEY }
      );
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}

module.exports = new imdbHelper();
