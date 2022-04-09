const util = require('util');
const fs = require('fs');

const replaceObject = require('./replace-object');

const readFileAsync = util.promisify(fs.readFile);
const writeAsync = util.promisify(fs.writeFile);

const replaceJson = async (originalFile, newFile) => {
    try {
        const originalJson = JSON.parse(await readFileAsync(originalFile));
        const newJson = JSON.parse(await readFileAsync(newFile));

        await writeAsync(originalFile, replaceObject(originalJson, newJson));
    } catch(e) {
        console.log(e.message);

        throw e;
    }
};

module.exports = replaceJson;
