#!/usr/bin/env node

const installProject = require("./src/core/steps/install-project");
const adjustFiles = require("./src/core/steps/adjust-files");
const adjustStructure = require("./src/core/steps/adjust-structure");

const [_, __, name, ...itens] = process.argv;

const params = itens.reduce((acc, item) => {
  const [key, value] = item.split("=");

  return { ...acc, [key]: value || true };
}, {});

const initi = async () => {
  try {
    // Instalando o projeto e bibliotecas necessárias.
    await installProject(name);

    // Ajustando arquivos do diretório.
    await adjustFiles(name);

    // Ajustando estrutura de arquivos.
    await adjustStructure(name);
  } catch (e) {
    console.clear();
    console.log(e);
  }
};

module.exports = initi;
