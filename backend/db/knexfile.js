// Update with your config settings.
// const parsepgConnection = require("pg-connection-string").parse;
// const pgConfig = parsepgConnection(process.env.DATABASE_URL);
// pgconfig.ssl = { rejectUnauthorized: false };
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "postgresql",

    connection: {
      database: "tonightshowdb",
      user: "postgres",
      password: "u2bechannel",
    },
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      connectionString: `${process.env.DATABASE_URL}`,
      ssl: { rejectUnauthorized: false },
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./migrations",
    },
  },
};
