const dirname = process.cwd();

const getFolderPath = require("../utils/get-folder-path");

const { copyFolderAsync, rmAsync } = require("../utils/async-functions");

const structureFiles = [
  { originalPath: '.gitignore', myPath: 'gitignore.txt' },
  { originalPath: 'README.md', myPath: 'README.md' },
  { originalPath: 'src', myPath: '/src' },
  { originalPath: 'public', myPath: '/public' }
];

const adjustStructure = async (name) => {
  try {
    const baseDir = `${dirname}${!!name && name !== '.' ? `/${name}` : ''}`;

    // Substituindo arquivos e pastas originais.
    for (let i = 0; i < structureFiles.length; i++) {
      const originalPath = `${baseDir}/${structureFiles[i].originalPath}`;

      await rmAsync(originalPath, { recursive: true, force: true });
  
      await copyFolderAsync(
        getFolderPath("folder-structure", structureFiles[i].myPath),
        originalPath
      );
    }

    await copyFolderAsync(
      getFolderPath("folder-structure", "Snippets.md"),
      `${baseDir}/.vscode/README.md`
    );
  } catch (e) {
    throw e;
  }
};

module.exports = adjustStructure;
