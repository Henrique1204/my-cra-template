const dirname = process.cwd();

const getFolderPath = require("../utils/get-folder-path");

const { copyFolderAsync, rmAsync } = require("../utils/async-functions");

const adjustFiles = async () => {
  try {
    // Apagando a pasta src original.
    await rmAsync(`${dirname}/src`, { recursive: true, force: true });

    // Copiando a pasta src com a estrutura padrão e arquivos base.
    await copyFolderAsync(
      getFolderPath("folder-structure", ""),
      `${dirname}/src`
    );
  } catch (e) {
    throw e;
  }
};

module.exports = adjustFiles;
