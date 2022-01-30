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
      connectionString:
        "postgres://pztyooyuzwxfgt:caa68bf3c272126289ee05cde81e3580d4106f718f268e318414ff190af4663b@ec2-18-209-169-66.compute-1.amazonaws.com:5432/d2fo63cjktekk2",
      ssl: false,
    },
    // connection: {
    //   database: "tonightshowdb",
    //   user: "postgres",
    //   password: "u2bechannel",
    // },
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
      connectionString:
        "postgres://pztyooyuzwxfgt:caa68bf3c272126289ee05cde81e3580d4106f718f268e318414ff190af4663b@ec2-18-209-169-66.compute-1.amazonaws.com:5432/d2fo63cjktekk2",
      ssl: true,
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
