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

async function getTop() {
  let movies = await fetch();

  return new Promise((resolve, reject) => {
    let mov = [];
    movies.forEach((movie) => {
      mov.push(movie.id);
    });
    resolve(mov);
  });
}

const imdb = require("imdb-api");

const insertIntoTable = async (id) => {
  let { rating, imdbid, name } = await imdb
    .get({ id: id }, { apiKey: process.env.IMDB_API_KEY })
    .then((res) => res)
    .catch((err) => {
      console.log(err);
    });
  Dao.addMovie(imdbid, name, rating, "");
};
// insertIntoTable();
const getTop250 = async () => {
  getTop()
    .then((res) => {
      res.forEach((id) => {
        insertIntoTable(id);
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
getTop250();
