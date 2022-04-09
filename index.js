const exec = require('./src/core//utils/async-exec');
const replaceJson = require('./src/core/utils/replace-json');
const getConfigPath = require('./src/core/utils/get-config-path');

const { resolve } =  require("path");

const [_, __, ...itens] = process.argv;
const dirname =  process.cwd();

const params = itens.reduce((acc, item) => {
    const [key, value] = item.split('=');

    return { ...acc, [key]: value || true };
}, {});

(async () => {
    try {
        // Executando o CRA padrão do React com o template de TypeScript.
        await exec('npx create-react-app . --template typescript');

        // Instalando React Router Dom e Styled-Component.
        await exec('npm i react-router-dom@6 styled-components');
        await exec('npm i  @types/styled-components -D');

        // Após instalar o projeto é preciso sobrescrever o package.json com base do seu.
        await replaceJson(resolve(dirname, "package.json"), JSON.stringify(getConfigPath('package.setup.json')));

        console.log('### ACABOU ###');
    } catch(_) {}
})();


