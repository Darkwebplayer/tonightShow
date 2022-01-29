const movieDao = require("../dao/movie");
const { generateRandomNum } = require("../helpers");
class movieService {
  addMovie(movieDto) {
    const { imdb_id, moviename, rating, feedback } = movieDto;
    return movieDao.createmovie(imdb_id, moviename, rating, feedback);
  }
  getmovie(imdb_id) {
    return movieDao.getMovie(imdb_id);
  }
  async generateMovie(watchedMovies) {
    let [{ count }] = await movieDao.getCount();

    let newMovies = [];
    while (newMovies.length <= 10) {
      let num = generateRandomNum(count);

      watchedMovies.forEach((wMovie) => {
        if (wMovie !== num) {
          newMovies.push(num);
        }
      });
    }
    let newMovie = generateRandomNum(10);
    let newMovieId = newMovies[newMovie];
    return movieDao.getMovie(newMovieId);
  }
}
module.exports = new movieService();
