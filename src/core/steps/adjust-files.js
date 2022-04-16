const dirname =  process.cwd();

const replaceJson = require('../utils/replace-json');
const getFolderPath = require('../utils/get-folder-path');

const { copyFileAsync, mkdirAsync } = require('../utils/async-functions');

const adjustFiles = async () => {
    try {
        // Substituindo o package.json padrão pelo nosso.
        await replaceJson(
            `${dirname}/package.json`,
            getFolderPath('configs', 'package.setup.json'),
            ['eslintConfig']
        );

        // Copiando o arquivo de configuração do craco pra raiz do novo projeto.
        await copyFileAsync(
            getFolderPath('configs', 'craco.setup.js'),
            `${dirname}/craco.config.js`,
        );

        // Copiando o arquivo de configuração do eslint pra raiz do novo projeto.
        await copyFileAsync(
            getFolderPath('configs', 'eslintconfig.setup.json'),
            `${dirname}/.eslintrc.json`,
        );

        // Copiando o arquivo de configuração do prettier pra raiz do novo projeto.
        await copyFileAsync(
            getFolderPath('configs', 'prettier.setup.js'),
            `${dirname}/.prettier.js`,
        );

        // Criando a pasta .vscode no novo projeto.
        await mkdirAsync(`${dirname}/.vscode`);

        // Copiando o arquivo de configuração do vscode pra dentro do projeto.
        await copyFileAsync(
            getFolderPath('configs', '.vscode/settings.setup.json'),
            `${dirname}/.vscode/settings.json`,
        );
    
        // Copiando o arquivo de snippets do vscode pra dentro do projeto.
        await copyFileAsync(
            getFolderPath('configs', '.vscode/global.setup.code-snippets'),
            `${dirname}/.vscode/global.code-snippets`,
        );
    } catch(e) {
        throw e;
    }
};

module.exports = adjustFiles;
