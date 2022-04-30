const dirname = process.cwd();

const getFolderPath = require("../utils/get-folder-path");

const { copyFolderAsync, rmAsync, copyFileAsync } = require("../utils/async-functions");

const adjustStructure = async () => {
  try {
    // Apagando o .gitignore original.
    await rmAsync(`${dirname}/.gitignore`, { force: true });

    // Copiando o arquivo .gitignore para raiz do projeto.
    await copyFileAsync(
      getFolderPath("folder-structure", "gitignore.txt"),
      `${dirname}/.gitignore`
    );

    // Apagando o README.md original.
    await rmAsync(`${dirname}/README.md`, { force: true });

    // Copiando o arquivo README.md para raiz do projeto.
    await copyFileAsync(
      getFolderPath("folder-structure", "README.md"),
      `${dirname}/README.md`
    );

    // Copiando o arquivo .env para raiz do projeto.
    await copyFileAsync(
      getFolderPath("folder-structure", ".env"),
      `${dirname}/.env`
    );

    // Copiando o arquivo .env.example para raiz do projeto.
    await copyFileAsync(
      getFolderPath("folder-structure", ".env.example"),
      `${dirname}/.env.example`
    );

    // Apagando a pasta src original.
    await rmAsync(`${dirname}/src`, { recursive: true, force: true });

    // Copiando a pasta src com a estrutura padrão e arquivos base.
    await copyFolderAsync(
      getFolderPath("folder-structure", "/src"),
      `${dirname}/src`
    );
  } catch (e) {
    throw e;
  }
};

module.exports = adjustStructure;
