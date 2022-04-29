const dirname = process.cwd();

const getFolderPath = require("../utils/get-folder-path");

const { copyFileAsync, rmAsync } = require("../utils/async-functions");

const adjustFiles = async () => {
  try {
    // Apagando o .gitignore original.
    await rmAsync(`${dirname}/.gitignore`, { force: true });

    // Copiando o arquivo .gitignore para raiz do projeto.
    await copyFileAsync(
      getFolderPath("configs", "gitignore.setup.txt"),
      `${dirname}/.gitignore`
    );

    // Copiando o arquivo .env para raiz do projeto.
    await copyFileAsync(
      getFolderPath("configs", "env.setup.txt"),
      `${dirname}/.env`
    );

    // Copiando o arquivo .env.example para raiz do projeto.
    await copyFileAsync(
      getFolderPath("configs", "env-example.setup.txt"),
      `${dirname}/.env.example`
    );
  } catch (e) {
    throw e;
  }
};

module.exports = adjustFiles;
