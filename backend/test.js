// // const IMDb = require("imdb-light");
// require("dotenv").config();
// // const Dao = require("./dao/movie");

// // /*
// // GET TOP 250
// // */
// // function fetch() {
// //   return new Promise(function (resolve, reject) {
// //     IMDb.topMovies((details) => {
// //       resolve(details);
// //     });
// //   });
// //}

// const { MovieDb } = require("moviedb-promise");

// const moviedb = new MovieDb(process.env.TMDB_API_KEY);

// // const getMovies = async () => {
// //   const movieId = fetch()
// //     .then((res) => {
// //       res.forEach((movie) => {
// //         moviedb
// //           .find({ id: movie.id, external_source: "imdb_id" })
// //           .then((res) => {
// //             let name = res.movie_results[0].title;
// //             let id = res.movie_results[0].id;
// //             let rating = res.movie_results[0].vote_average;
// //             Dao.addMovie(id, name, rating);
// //             console.log(res.movie_results[0].title);
// //           })
// //           .catch(console.error);
// //       });
// //     })
// //     .catch((err) => {
// //       console.log(err);
// //     });
// // };
// // getMovies();

// // const res = Dao.getAll();

// // GET USING EXTERNAL ID LIKE IMDB
// // moviedb
// //   .find({ id: "tt9032400", external_source: "imdb_id" })
// //   .then((res) => {
// //     console.log(res);
// //   })
// //   .catch(console.error);

// // GET POSTER OF THE MOVIE using the poster_path
// // `https://image.tmdb.org/t/p/w500/`;

// // GET MOVIE DETAILS WITH PLATFORM
// //https://api.themoviedb.org/3/movie/842275?api_key=2c7b221f0f9df7e4e8ef02853f987e5b&language=en-US&append_to_response=watch/providers

// // moviedb
// //   .movieInfo({ id: "842275", append_to_response: "watch/providers" })
// //   .then((res) => {
// //     console.log(res);
// //   })
// //   .catch(console.error);
// // const getMovie = async (tmdb_id) => {
// //   return moviedb
// //     .movieInfo({ id: tmdb_id, append_to_response: "watch/providers" })
// //     .then((res) => {
// //       let response = {
// //         title: res.title,
// //         rating: res.vote_average,
// //         language: res.original_language,
// //         genres: res.genres,
// //         id: res.id,
// //         plot: res.overview,
// //         streaming: res["watch/providers"],
// //       };

// //       return response;
// //     })
// //     .catch((err) => {
// //       console.log(err);
// //       return err;
// //     });
// // };

// // getMovie("842275");
const IMDb = require("imdb-light");
require("dotenv").config();
// const IMDb = require("imdb-light");
// require("dotenv").config();
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
// /*
// GET TOP 250
// */
// function fetch() {
//   return new Promise(function (resolve, reject) {
//     IMDb.topMovies((details) => {
//       resolve(details);
//     });
//   });
// }

const { MovieDb } = require("moviedb-promise");
// const { MovieDb } = require("moviedb-promise");

const moviedb = new MovieDb(`${process.env.TMDB_API_KEY}`);
// const moviedb = new MovieDb(process.env.TMDB_API_KEY);

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
// const getMovies = async () => {
//   const movieId = fetch()
//     .then((res) => {
//       res.forEach((movie) => {
//         moviedb
//           .find({ id: movie.id, external_source: "imdb_id" })
//           .then((res) => {
//             let name = res.movie_results[0].title;
//             let rating = res.movie_results[0].vote_average;
//             Dao.addMovie(movie.id, name, rating);
//             console.log(res.movie_results[0].title);
//           })
//           .catch(console.error);
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
// getMovies();

const res = Dao.getAll();
