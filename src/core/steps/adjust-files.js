const { resolve } =  require('path');
const dirname =  process.cwd();

const replaceJson = require('../utils/replace-json');
const getConfigPath = require('../utils/get-config-path');

const { copyFileAsync, mkdirAsync } = require('../utils/async-functions');

const adjustFiles = async () => {
    try {
        // Substituindo o package.json padrão pelo nosso.
        await replaceJson(
            resolve(dirname, 'package.json'),
            getConfigPath('package.setup.json'),
            ['eslintConfig']
        );

        // Copiando o arquivo de configuração do craco pra raiz do novo projeto.
        await copyFileAsync(
            getConfigPath('craco.setup.js'),
            resolve(dirname, 'craco.config.js')
        );

        // Copiando o arquivo de configuração do eslint pra raiz do novo projeto.
        await copyFileAsync(
            getConfigPath('eslintconfig.setup.json'),
            resolve(dirname, '.eslintrc.json')
        );

        // Copiando o arquivo de configuração do prettier pra raiz do novo projeto.
        await copyFileAsync(
            getConfigPath('prettier.setup.js'),
            resolve(dirname, '.prettier.js')
        );

        // Copiando o arquivo de configuração do vscode pra raiz do novo projeto.
        await mkdirAsync(resolve(dirname, '.vscode'));

        await copyFileAsync(
            getConfigPath('vscode.setup.json'),
            resolve(dirname, '.vscode/settings.json')
        );
    } catch(e) {
        throw e;
    }
};

module.exports = adjustFiles;
