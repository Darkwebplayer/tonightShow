const { MovieDb } = require("moviedb-promise");

const moviedb = new MovieDb(process.env.TMDB_API_KEY);
class imdbHelper {
  constructor() {
    const posterUrl = "https://image.tmdb.org/t/p/w500/";
  }
  async getMovie(tmdb_id) {
    return moviedb
      .movieInfo({ id: tmdb_id, append_to_response: "watch/providers" })
      .then((res) => {
        let response = {
          title: res.title,
          rating: res.vote_average,
          language: res.original_language,
          genres: res.genres,
          id: res.id,
          plot: res.overview,
          streaming: res["watch/providers"],
        };

        return response;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }
}

module.exports = new imdbHelper();
