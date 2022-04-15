const exec = require('../utils/async-exec');
const COMMANDS_LIST = require('../constants/commands');

const installProject = async () => {
    try {
        // Executando o CRA padrão do React com o template de TypeScript.
        await exec(COMMANDS_LIST.START);
        await exec(COMMANDS_LIST.FIX_REACT_SCRIPTS);

        // Instalando React Router Dom e Styled-Component.
        await exec(COMMANDS_LIST.INSTALL_DEPENDENCIES_BASE);
        await exec(COMMANDS_LIST.INSTALL_DEPENDENCIES_DEV);
    } catch(e) {
        throw e;
    }
};

module.exports = installProject;
