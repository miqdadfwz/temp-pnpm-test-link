const fs = require("fs");

function check() {
  return fs.existsSync("./node_modules/.pnpm/node_modules");
}

module.exports = check;
