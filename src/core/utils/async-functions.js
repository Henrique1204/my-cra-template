const util = require('util');

const exec = util.promisify(require('child_process').exec);

const fs = require('fs');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
const copyFileAsync= util.promisify(fs.copyFile);

module.exports = {
    exec,
    readFileAsync,
    writeFileAsync,
    copyFileAsync
}