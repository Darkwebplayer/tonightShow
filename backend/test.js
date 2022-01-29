const IMDb = require("imdb-light");
require("dotenv").config();
const Dao = require("./dao/movie");

/*
GET TOP 250
*/
function fetch() {
  return new Promise(function (resolve, reject) {
    IMDb.topMovies((details) => {
      resolve(details);
    });
  });
}

const { MovieDb } = require("moviedb-promise");

const moviedb = new MovieDb(process.env.TMDB_API_KEY);

const getMovies = async () => {
  const movieId = fetch()
    .then((res) => {
      res.forEach((movie) => {
        moviedb
          .find({ id: movie.id, external_source: "imdb_id" })
          .then((res) => {
            let name = res.movie_results[0].title;
            let rating = res.movie_results[0].vote_average;
            Dao.addMovie(movie.id, name, rating);
            console.log(res.movie_results[0].title);
          })
          .catch(console.error);
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
getMovies();
