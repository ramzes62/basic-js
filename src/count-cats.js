const CustomError = require("../extensions/custom-error");

module.exports = function countCats(yards) {
  let catsCounter = 0;
  for (const yard of yards) {
    for (const animal of yard) {
      if (animal === "^^") catsCounter++;
    }
  }
  return catsCounter;
};