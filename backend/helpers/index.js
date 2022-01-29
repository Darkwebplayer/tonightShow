class Helpers {
  parseBearer = (bearer) => {
    const [_, token] = bearer.trim().split(" ");
    return token;
  };
  generateRandomNum = (limit) => {
    return Math.floor(Math.random() * limit + 1);
  };
}

module.exports = new Helpers();
