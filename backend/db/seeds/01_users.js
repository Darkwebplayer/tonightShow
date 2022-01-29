/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        { username: "joey", email: "joey@friends.com", password: "12345678" },
        {
          username: "chandler",
          email: "chandler@friends.com",
          password: "12345678",
        },
        {
          username: "pheobe",
          email: "pheobe@friends.com",
          password: "12345678",
        },
      ]);
    });
};
