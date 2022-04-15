const getConfigPath = (path) => {
    return `${__dirname.split('src')[0]}src/configs/${path}`;
};

module.exports = getConfigPath;