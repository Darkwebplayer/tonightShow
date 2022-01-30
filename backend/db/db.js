const knex = require("knex");
const knexfile = require("./knexfile");
if (process.env.PROD_DEV === "PRODUCTION") {
  const db = knex(knexfile.production);
} else {
  const db = knex(knexfile.development);
}

module.exports = db;
