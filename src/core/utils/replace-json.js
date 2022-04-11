const replaceObject = require('./replace-object');

const { readFileAsync, writeFileAsync  } = require('./async-functions');

const replaceJson = async (originalFile, newFile) => {
    try {
        const originalJson = JSON.parse(await readFileAsync(originalFile));
        const newJson = JSON.parse(await readFileAsync(newFile));

        await writeFileAsync(originalFile, JSON.stringify(replaceObject(originalJson, newJson)));
    } catch(e) {
        console.log(e.message);

        throw e;
    }
};

module.exports = replaceJson;
