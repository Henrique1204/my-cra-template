const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "../src"), "node_modules"],
      alias: {
        Types: path.resolve(__dirname, "src/@types"),
        Mocks: path.resolve(__dirname, "src/@mocks"),
        Components: path.resolve(__dirname, "src/Components"),
        Core: path.resolve(__dirname, "src/Core"),
        Assets: path.resolve(__dirname, "src/Core/Assets"),
        Constants: path.resolve(__dirname, "src/Core/Constants"),
        Helpers: path.resolve(__dirname, "src/Core/Helpers"),
        Services: path.resolve(__dirname, "src/Core/Services"),
        Hooks: path.resolve(__dirname, "src/Hooks"),
        Contexts: path.resolve(__dirname, "src/Contexts"),
        Pages: path.resolve(__dirname, "src/Pages"),
        Tests: path.resolve(__dirname, "src/Tests"),
      },
    },
  });
};
