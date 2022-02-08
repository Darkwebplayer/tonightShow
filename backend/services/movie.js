const movieDao = require("../dao/movie");
const { generateRandomNum } = require("../helpers");
class movieService {
  addMovie(movieDto) {
    const { imdb_id, moviename, rating, feedback } = movieDto;
    return movieDao.createmovie(imdb_id, moviename, rating, feedback);
  }
  getmovie(tmdb_id) {
    return movieDao.getMovie(tmdb_id);
  }
  async generateMovie(watchedMovies = []) {
    let [{ count }] = await movieDao.getCount();
    let RandomMovie = await movieDao.getRandom(count, watchedMovies);

    return RandomMovie;
  }
}
module.exports = new movieService();
