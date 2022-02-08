//  1 | 278     | The Shawshank Redemption                               |    8.7 |    10 |
//    2 | 238     | The Godfather                                          |    8.7 |    10 |
//    3 | 240     | The Godfather: Part II                                 |    8.6 |    10 |
//    4 | 155     | The Dark Knight                                        |    8.5 |    10 |
//    5 | 389     | 12 Angry Men                                           |    8.5 |    10 |
//    6 | 424     | Schindler's List                                       |    8.6 |    10 |
//    7 | 122     | The Lord of the Rings: The Return of the King          |    8.5 |    10 |
//    8 | 680     | Pulp Fiction                                           |    8.5 |    10 |
//    9 | 429     | The Good, the Bad and the Ugly                         |    8.5 |    10 |
//   10 | 120     | The Lord of the Rings: The Fellowship of the Ring      |    8.4 |    10 |
//   11 | 550     | Fight Club                                             |    8.4 |    10 |
//   12 | 13      | Forrest Gump                                           |    8.5 |    10 |
//   13 | 27205   | Inception                                              |    8.4 |    10 |
//   14 | 121     | The Lord of the Rings: The Two Towers                  |    8.4 |    10 |
//   15 | 1891    | The Empire Strikes Back                                |    8.4 |    10 |
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("movies")
    .del()
    .then(function () {
      // Inserts seed entries
      //  id | tmdb_id | name | rating | votes | feedback;
      return knex("movies").insert([
        {
          tmdb_id: "278",
          name: "The Shawshank Redemption",
          rating: "8.7",
          votes: "10",
          feedback: "",
        },
        {
          tmdb_id: "238",
          name: "The Godfather",
          rating: "8.6",
          votes: "10",
          feedback: "",
        },
        {
          tmdb_id: "240",
          name: "The Godfather: Part II",
          rating: "8.6",
          votes: "10",
          feedback: "",
        },
        {
          tmdb_id: "155",
          name: "The Dark Knight",
          rating: "8.5",
          votes: "10",
          feedback: "",
        },
        {
          tmdb_id: "389",
          name: "12 Angry Men ",
          rating: "8.5",
          votes: "10",
          feedback: "",
        },

        {
          tmdb_id: "424",
          name: "Schindler's List",
          rating: "8.6",
          votes: "10",
          feedback: "",
        },
      ]);
    });
};
