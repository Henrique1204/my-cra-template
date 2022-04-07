const { exec } = require('child_process');

const fs = require('fs');
const package = require('./configs/package.setup.json');

const [_, __, ...itens] = process.argv;

const params = itens.reduce((acc, item) => {
    const [key, value] = item.split('=');

    return { ...acc, [key]: value || true };
}, {});

console.log('Começou');

exec('npx create-react-app .', (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return
    }

    if (stderr) {
        console.log(`stderr: ${stderr}`);
    }

    // # Após instalar o projeto é preciso sobrescrever o package.json com base do seu.

    const brinks1 = { scripts: { start: 'meu' } };
    const brinks2 = { scripts: { start: 'react', other: 'outro' } };

    const brinks3 = { ...brinks2, scripts: { ...brinks2.script, ...brinks1.scripts } };

    console.log(brinks3);
});

