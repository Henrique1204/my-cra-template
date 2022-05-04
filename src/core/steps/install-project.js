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

const installProject = async (name) => {
  try {
    const folderInstall = !!name && name !== "." ? name : '';

    const commands = [
      {
        command: COMMANDS_LIST.START.replace(":name", name || "."),
        message: "Iniciando o projeto",
      },
      {
        command: COMMANDS_LIST.INSTALL_DEPENDENCIES_BASE.replace(":name", folderInstall),
        message: "Instalando as dependências iniciais",
      },
      {
        command: COMMANDS_LIST.INSTALL_DEPENDENCIES_DEV.replace(":name", folderInstall),
        message: "Instalando as dependências de desenvolvimento",
      },
      {
        command: COMMANDS_LIST.INSTALL_DEPENDENCIES_JEST.replace(":name", folderInstall),
        message: "Instalando as dependências do jest",
      },
      {
        command: COMMANDS_LIST.INSTALL_DOCZ_DEPENDENCIES.replace(":name", folderInstall),
        message: "Instalando as dependências do docz",
      },
    ];

    for (let i = 0; i < commands.length; i++) {
      const { command, message } = commands[i];

      // Instalando projeto.
      await execWithLoadingMessage(command, message);
    }
  } catch (e) {
    throw e;
  }
};

module.exports = installProject;
