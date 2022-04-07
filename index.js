const exec = require('./utils/async-exec');

const fs = require('fs');
const package = require('./configs/package.setup.json');

const [_, __, ...itens] = process.argv;

const params = itens.reduce((acc, item) => {
    const [key, value] = item.split('=');

    return { ...acc, [key]: value || true };
}, {});

(async () => {
    await exec('npx create-react-app . --template typescript');
    
    // # Após instalar o projeto é preciso sobrescrever o package.json com base do seu.

    const brinks1 = { scripts: { start: 'meu' } };
    const brinks2 = { scripts: { start: 'react', other: 'outro' } };

    const brinks3 = { ...brinks2, scripts: { ...brinks2.script, ...brinks1.scripts } };

    console.log(brinks3);
})();


