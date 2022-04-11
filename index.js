const exec = require('./src/core//utils/async-exec');
const COMMANDS_LIST = require('./src/constants/commands');

const replaceJson = require('./src/core/utils/replace-json');
const getConfigPath = require('./src/core/utils/get-config-path');

const { resolve } =  require('path');

const { copyFileAsync } = require('./src/core/utils/async-functions');

const [_, __, ...itens] = process.argv;
const dirname =  process.cwd();

const params = itens.reduce((acc, item) => {
    const [key, value] = item.split('=');

    return { ...acc, [key]: value || true };
}, {});

(async () => {
    try {
        // Executando o CRA padrão do React com o template de TypeScript.
        await exec(COMMANDS_LIST.START);
        await exec(COMMANDS_LIST.FIX_REACT_SCRIPTS);

        // Instalando React Router Dom e Styled-Component.
        await exec(COMMANDS_LIST.INSTALL_DEPENDENCIES_BASE);
        await exec(COMMANDS_LIST.INSTALL_DEPENDENCIES_DEV);

        // Após instalar o projeto é preciso sobrescrever o package.json com base do seu.
        await replaceJson(
            resolve(dirname, 'package.json'),
            getConfigPath('package.setup.json')
        );

        // Copia o arquivo de configuração do craco pra raiz do novo projeto.
        await copyFileAsync(
            getConfigPath('craco.setup.js'),
            resolve(dirname, 'craco.config.js')
        );
    } catch(_) {}
})();


