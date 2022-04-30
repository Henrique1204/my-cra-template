const replaceObject = require("./replace-object");

const { readFileAsync, writeFileAsync } = require("./async-functions");

const replaceJson = async (originFile, newFile, removeKeys = []) => {
  try {
    const originJson = JSON.parse(await readFileAsync(originFile));
    const newJson = JSON.parse(await readFileAsync(newFile));

    await writeFileAsync(
      originFile,
      JSON.stringify(replaceObject(originJson, newJson, removeKeys))
    );
  } catch (e) {
    console.log(e.message);

    throw e;
  }
};

module.exports = replaceJson;
