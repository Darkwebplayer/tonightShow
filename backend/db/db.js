const knex = require("knex");
const knexfile = require("./knexfile");
const db
if (process.env.PROD_DEV === "PRODUCTION") {
 db = knex(knexfile.production);
} else {
   db = knex(knexfile.development);
}

module.exports = db;
