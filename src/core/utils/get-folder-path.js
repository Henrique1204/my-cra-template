const getFolderPath = (folder, path = "") => {
  return `${__dirname.split("src")[0]}src/${folder}/${path}`;
};

module.exports = getFolderPath;
