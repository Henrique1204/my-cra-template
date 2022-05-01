const dirname = process.cwd();

const replaceJson = require("../utils/replace-json");
const getFolderPath = require("../utils/get-folder-path");

const { copyFileAsync, mkdirAsync } = require("../utils/async-functions");

const filesForCopy = [
  { file: "craco.setup.js", destiny: "craco.config.js" },
  {
    file: "eslintconfig.setup.json",
    destiny: ".eslintrc.json",
  },
  { file: "prettier.setup.js", destiny: ".prettier.js" },
  {
    file: "jest.config.setup.js",
    destiny: "jest.config.js",
  },
  {
    file: "jest.tsconfig.setup.json",
    destiny: "jest.tsconfig.json",
  },
  {
    file: "gatsby-node.setup.js",
    destiny: "gatsby-node.js",
  },
  {
    file: ".vscode/settings.setup.json",
    destiny: ".vscode/settings.json",
  },
  {
    file: ".vscode/global.setup.code-snippets",
    destiny: ".vscode/global.code-snippets",
  },
  {
    file: "tsconfig.paths.setup.json",
    destiny: "tsconfig.paths.json",
  },
];

const jsonsForReplace = [
  {
    originFile: "package.json",
    newFile: "package.setup.json",
    removeKeys: ["eslintConfig"],
  },
  {
    originFile: "tsconfig.json",
    newFile: "tsconfig.setup.json",
    removeKeys: [],
  },
];

const adjustFiles = async () => {
  try {
    // // Criando a pasta .vscode no novo projeto.
    await mkdirAsync(`${dirname}/.vscode`);

    // Substituindo os json padrões pelos nossos.
    for (let i = 0; i < jsonsForReplace.length; i++) {
      const { originFile, newFile, removeKeys } = jsonsForReplace[i];

      await replaceJson(
        `${dirname}/${originFile}`,
        getFolderPath("configs", newFile),
        removeKeys
      );
    }

    // Copiando arquivos de configuração para dentro do projeto.
    for (let i = 0; i < filesForCopy.length; i++) {
      const { file, destiny } = filesForCopy[i];

      await copyFileAsync(
        getFolderPath("configs", file),
        `${dirname}/${destiny}`
      );
    }
  } catch (e) {
    throw e;
  }
};

module.exports = adjustFiles;
