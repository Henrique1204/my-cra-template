const dirname = process.cwd();

const getFolderPath = require("../utils/get-folder-path");

const { copyFolderAsync, rmAsync, copyFileAsync } = require("../utils/async-functions");

const adjustStructure = async (name) => {
  try {
    const baseDir = `${dirname}${!!name && name !== '.' ? `/${name}` : ''}`;

    // Apagando o .gitignore original.
    await rmAsync(`${baseDir}/.gitignore`, { force: true });

    // Copiando o arquivo .gitignore para raiz do projeto.
    await copyFileAsync(
      getFolderPath("folder-structure", "gitignore.txt"),
      `${baseDir}/.gitignore`
    );

    // Apagando o README.md original.
    await rmAsync(`${baseDir}/README.md`, { force: true });

    // Copiando o arquivo README.md para raiz do projeto.
    await copyFileAsync(
      getFolderPath("folder-structure", "README.md"),
      `${baseDir}/README.md`
    );

    // Copiando o arquivo .env para raiz do projeto.
    await copyFileAsync(
      getFolderPath("folder-structure", ".env"),
      `${baseDir}/.env`
    );

    // Copiando o arquivo .env.example para raiz do projeto.
    await copyFileAsync(
      getFolderPath("folder-structure", ".env.example"),
      `${baseDir}/.env.example`
    );

    // Apagando a pasta src original.
    await rmAsync(`${baseDir}/src`, { recursive: true, force: true });

    // Copiando a pasta src com a estrutura padrão e arquivos base.
    await copyFolderAsync(
      getFolderPath("folder-structure", "/src"),
      `${baseDir}/src`
    );
  } catch (e) {
    throw e;
  }
};

module.exports = adjustStructure;
