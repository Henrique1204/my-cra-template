const exec = require("../utils/async-exec");
const COMMANDS_LIST = require("../constants/commands");

const loadingLog = require("../utils/loading-log");

const execWithLoadingMessage = async (command, message) => {
  // Iniciando loading.
  const loadingInterval = loadingLog(message);
  const stopLoading = () => clearInterval(loadingInterval);

  // Executando o CRA padrão do React com o template de TypeScript.
  await exec(command, stopLoading, stopLoading);
};

const installProject = async () => {
  try {
    // Executando o CRA padrão do React com o template de TypeScript.
    await execWithLoadingMessage(COMMANDS_LIST.START, "Iniciando o projeto");

    // Corrigindo o react-scripts para utilização do craco no projeto.
    await execWithLoadingMessage(
      COMMANDS_LIST.FIX_REACT_SCRIPTS,
      "Corrigindo react-scripts"
    );

    // Instalando React Router Dom e Styled-Component.
    await execWithLoadingMessage(
      COMMANDS_LIST.INSTALL_DEPENDENCIES_BASE,
      "Instalando as dependências iniciais"
    );

    // Instalando dependências de desenvolvimento.
    await execWithLoadingMessage(
      COMMANDS_LIST.INSTALL_DEPENDENCIES_DEV,
      "Instalando as dependências de desenvolvimento"
    );

    // Corrigindo a versão do jest para bater com o react-scripts.
    await execWithLoadingMessage(
      COMMANDS_LIST.FIX_JEST_DEPENDENCIES,
      "Corrigindo versões do jest"
    );
  } catch (e) {
    throw e;
  }
};

module.exports = installProject;
