const util = require("util");

const exec = util.promisify(require("child_process").exec);

const fs = require("fs");
const fse = require("fs-extra");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
const copyFileAsync = util.promisify(fs.copyFile);
const unlinkFileAsync = util.promisify(fs.unlink);
const mkdirAsync = util.promisify(fs.mkdir);
const rmAsync = util.promisify(fs.rm);
const copyFolderAsync = util.promisify(fse.copy);

module.exports = {
  exec,
  readFileAsync,
  writeFileAsync,
  copyFileAsync,
  mkdirAsync,
  unlinkFileAsync,
  copyFolderAsync,
  rmAsync,
};
