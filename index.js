const installProject = require('./src/core/steps/install-project');
const adjustFiles = require('./src/core/steps/adjust-files');

const [_, __, ...itens] = process.argv;

const params = itens.reduce((acc, item) => {
    const [key, value] = item.split('=');

    return { ...acc, [key]: value || true };
}, {});

(async () => {
    try {
        // Instalando o projeto e bibliotecas necessárias.
        await installProject();

        // Ajustando arquivos do diretório.
        await adjustFiles();
    } catch(e) {
        console.clear();
        console.log(e);
    }
})();


