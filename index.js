const exec = require('./utils/async-exec');

const [_, __, ...itens] = process.argv;

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
        // const brinks1 = { scripts: { start: 'meu' } };
        // const brinks2 = { scripts: { start: 'react', other: 'outro' } };

        // const brinks3 = { ...brinks2, scripts: { ...brinks2.script, ...brinks1.scripts } };

        // console.log(brinks3);
    } catch(_) {}
})();


