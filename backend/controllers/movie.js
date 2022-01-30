const movieService = require("../services/movie");
const imdb = require("../helpers/imdbHelper");
class userController {
  async addMovie(req, res) {
    try {
      const id = await movieService.addMovie(req.body);
      return res.status(201).json(id);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: err });
    }
  }
  async getMovie(req, res) {
    try {
      const qres = await movieService.getmovie(req.params.id);
      return res.status(200).json(qres);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: err });
    }
  }
  async generateMovie(req, res) {
    console.log("new Request");
    let { watchedMovies } = req.body;

    try {
      const [movie] = await movieService.generateMovie(watchedMovies);

      let movieData = await imdb.getMovie(movie.tmdb_id);
      console.log(movieData.title);
      return res.status(200).json(movieData);
    } catch (Err) {
      return res.status(500).json({ error: Err });
    }
  }
}
module.exports = new userController();
