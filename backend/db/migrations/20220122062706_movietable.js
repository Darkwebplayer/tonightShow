/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("movies", (table) => {
    table.increments();
    table.string("imdb_id").notNullable();
    table.string("name").notNullable().unique();
    table.float("rating", 1).notNullable();
    table.integer("votes").notNullable();
    table.string("feedback");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("movies");
};
